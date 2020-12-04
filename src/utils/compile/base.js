import Tools from '@/utils/tools.js';
import chartSettings from './defaultSetting.js';
export class EchartsHelper {
  constructor(chartInfo) {
    this.chartInfo = _.cloneDeep(chartInfo);
    this.type = '';
    this.settingType = ''; // 使用defaultSettings 中的配置
    this.group = [];
    this.stat = [];
    this.list = [];
    this.gvals = []; // 维度值列表
    this.gname = ''; // 维度名
    this.series = [];
    this.customSetting = {};
    this.setting = {};

  }

  baseSetInfo() {
    let { type = 'linebar', group = [], stat = [], list = [], customSetting = {}, settingType = '' } = this.chartInfo;
    this.type = type;
    this.group = group;
    this.stat = stat;
    this.list = list;
    this.customSetting = customSetting;
    this.settingType = settingType || this.type;
    if (this.group[0] && this.group[0].name) {
      this.gvals = _.uniq(_.map(this.list, this.group[0].name));
    }

    // 维度名
    this.gname = this.group[0] && this.group[0].name || '无';

    this.setting = _.cloneDeep(chartSettings[this.settingType].setting || {});
    this.setting = _.merge(this.setting, this.customSetting);
    this.series = this.setting.series || [];

    // debugger

    // 提示格式化
    if (this.setting.tooltip) {
      this.setting.tooltip.formatter = this.tooltipFormatter.bind(this);
    }
  }

  basexAxis() {
    this.setting.xAxis.data = this.gvals; // 生成横轴
  }

  tooltipFormatter(params) {
    let title = this.tooltipTittle(params);
    let content = this.tooltipContent(params)
    let children = `
      ${title}
      ${content}
    `;
    return this.tooltipWrapper(children);
  }

  tooltipWrapper(children) {
    // tooltip 外壳
    return `
      <div class="gl_chart_tooltip_wrapper">${children}</div>
    `;
  }

  tooltipTittle(params) {
    let title = '';
    if (Array.isArray(params)) {
      title = params[0].axisValue;
    }
    else {
      // debugger
      let { componentSubType = '' } = params;
      if (componentSubType == 'radar' || componentSubType == 'pie') {
        title = params.name;
      }
      else if (componentSubType == 'scatter') {
        title = params.data.name;
      }
    }

    return `<p class="tooltip_title">${title}</p>`;
  }

  tooltipContent(params) {
    if (Array.isArray(params)) {
      return this.barContent(params)
    }

    let { componentSubType } = params;
    if (componentSubType == 'pie') {
      return this.pieContent(params);
    }
    return '';

  }
  barContent(params) {
    // 柱状图生成的tooltip 中间内容区， 包括横向柱状图
    let content = '';
    params.forEach(val => {
      // debugger
      let { seriesType, color, seriesName, unit} = val;

      let _value = val.data.value;
      let pValue = ''; // 堆叠百分比图显示. 例如(12%)

      if ('realValue' in val.data) {
        // 堆叠百分比图的value 是转换后的， 需要取真实的
        _value = val.data.realValue;
        pValue = val.data.value;
      }
      
      let _params = {
        seriesType,
        color,
        seriesName,
        value: _value,
        pValue,
        unit
      }
      content += this.getTooltipLineItem(_params);
    });
    return content;
  }

  pieContent(params) {
    // debugger
    let { seriesType, color, percent, data, seriesName } = params;
    let { unit, value } = data;
    let _params = {
      seriesType,
      color,
      seriesName,
      value,
      pValue: percent,
      unit
    }
    return this.getTooltipLineItem(_params);

  }

  getTooltipIcon(seriesType, color) {
    if (seriesType == 'line') {
      return this.getTooltipLineIcon(color);
    }
    return this.getTooltipDefIcon(color);
  }

  getTooltipLineIcon(color) {
    // tooltip 折线图icon
    return `
      <div class="icon_box">
        <div class="line_icon">
          <div class="ball" style="border-color: ${color}"></div>
        </div>
      </div>
    `
  }

  getTooltipDefIcon(color) {
    // tooltip 非折线图icon
    return `
      <div class="icon_box">
        <div class="def_icon" style="background-color: ${color}"></div>
      </div>
    `
  }

  getTooltipLineItem(params = {}) {
    let { seriesType = 'bar', color = '', seriesName = '', value, pValue = '', unit = '' } = params;

    let iconDom = seriesType ? this.getTooltipIcon(seriesType, color) : '';
    let seriesnameDom = this.tipdom('series_name', seriesName); // 指标名
    let valueDom = this.tipdom('series_value', Tools.thousandsFormat(value));
    let unitDom = unit ? this.tipdom('series_unit', unit) : '';
    let pValueDom = pValue ? this.tipdom('series_pvalue', `(${Tools.thousandsFormat(pValue)}%)`) : '';
    return `
      <div class="line_item">
        ${iconDom}
        <div class="line_content">
          ${seriesnameDom}
          ${valueDom}
          ${unitDom}
          ${pValueDom}
        </div>
      </div>
    `;
  }

  tipdom(classname = '', val = '') {
    return `
      <span class="${classname}">${val}</span>
    `
  }

  baseSetStack() {
    //普通堆叠图， 只需要把series 中的 stack 设为同一类型
    this.series.forEach(serie => {
      serie.stack = 'stack';
    });
  }

  baseSetPercent() {
    let len = this.series[0].data.length;
    for (let i = 0; i < len; i++) {
      let total = 0;
      this.series.forEach(item => {
        total += item.data[i].value;
      });
      this.series.forEach(item => {
        // realValue 为真实数据， value 为计算后的百分比
        item.data[i].realValue = item.data[i].value;
        let percentValue = parseFloat((item.data[i].value / total * 100).toFixed(3));
        item.data[i].value = isNaN(percentValue) ? 0 : percentValue;
        item.stack = 'stack';
      });
    }
  }

  baseCompile(_options = {}) {
    // 保留特殊配置
    this.setting.series = this.series;
    return _.merge(this.setting, _options);
  }
} 