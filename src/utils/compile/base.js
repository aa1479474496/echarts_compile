
import chartSettings from './defaultSetting.js';
export class EchartsHelper {
  constructor(chartInfo) {
    this.chartInfo = chartInfo;
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
    let { type = 'linebar', group = [], stat = [], list = [], customSetting = {},settingType = '' } = this.chartInfo;
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
  }

  baseSetStack() {
    //普通堆叠图， 只需要把series 中的 stack 设为同一类型
    this.series.forEach(serie => {
      serie.stack = 'stack';
    });
  }

  baseCompile(_options = {}) {
     // 保留特殊配置
    this.setting.series = this.series;
    return _.merge(this.setting, _options);
  }
} 