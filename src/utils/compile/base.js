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
    this.gvals = []; // 维度名
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

    this.setting = _.cloneDeep(chartSettings[this.settingType].setting || {});

    this.setting = _.merge(this.setting, this.customSetting);
    this.setting.xAxis.data = this.gvals; // 生成横轴

    // 提示格式化
    if (this.setting.tooltip) {
      this.setting.tooltip.formatter = this.tooltipFormatter.bind(this);
    }
  }

  tooltipFormatter(params) {
    console.log('params', params);
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

  }
  barContent(params) {
    // 柱状图生成的tooltip 中间内容区， 包括横向柱状图
    let content = '';
    params.forEach(val => {
      // debugger
      let icon = '';
      let { seriesType } = val;
      if (seriesType == 'line') {
        icon = this.getTooltipLineIcon(val.color);
      }
      else {
        icon = this.getTooltipDefIcon(val.color);
      }

      let _value = val.data.value;
      let pValue = ''; // 堆叠百分比图显示. 例如(12%)
      if ('realValue' in  val.data) {
        // 堆叠百分比图的value 是转换后的， 需要取真实的
        _value = val.data.realValue;
        pValue = `
          <span class="series_pvalue">(${val.data.value}%)</span>
        `
      }
      let unit = '';

      if (val.data.unit) {
        unit = `
          <span class="series_unit">${val.data.unit}</span>
        `;
      }

      let seriesName = `
        <span class="series_name">${val.seriesName}</span>
      `;
      let seriesVal = `
        <span class="series_value">${Tools.thousandsFormat(_value)}</span>
      `;

      content += `
        <div class="line_item">
          ${icon}
          <div class="line_content">
            ${seriesName}
            ${seriesVal}
            ${unit}
            ${pValue}
          </div>
        </div>
      `;
    });
    return content;
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

    // 设置Y轴刻度
    this.setting.yAxis[0].max = 100;
  }

  baseCompile(_options = {}) {
    // 保留特殊配置
    this.setting.series = this.series;
    return _.merge(this.setting, _options);
  }
} 