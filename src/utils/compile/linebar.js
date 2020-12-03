import { EchartsHelper } from './base.js';

export class LinebarHelper extends EchartsHelper {
  // 默认柱状图
  constructor(chartInfo) {
    super(chartInfo);
    this.baseSetInfo(this.chartInfo);
    this.basexAxis();
  }

  getSeries() {
    this.stat.forEach((stat) => {
      // let _data = _.map(this.list, stat.name);
      let data = _.map(this.list, (item) => {
        return {
          value: item[stat.name],
          unit: stat.unit
        }
      });
      // // 面积图特殊处理
      if (stat.type == 'area') {
        stat.type = "line";
        stat.areaStyle = {};
      }
      this.series.push({
        ...stat,
        data,
      });
    });
  }

  run() {
    this.getSeries();
    return this.baseCompile();
  }
} 

export class StackLinebarHelper  extends LinebarHelper {
  // 堆叠柱状图
  constructor(chartInfo) {
    super(chartInfo);
  }

  run() {
    this.getSeries();
    this.baseSetStack();
    return this.baseCompile();
  }
}

export class StackPercentLinebarHelper extends LinebarHelper {
  // 百分比堆叠柱状图
  constructor(chartInfo) {
    super(chartInfo);
  }

  run() {
    this.getSeries();
    this.baseSetPercent();
    return this.baseCompile();
  }
}


// if (form.getFieldValue('afterDeliverSupportSaleType')?.includes(2)) {
//   form
//     .validateFields([
//       ['returnGoodsAddress', 'detailAddress'],
//       ['returnGoodsAddress', 'addressee'],
//       ['returnGoodsAddress', 'contactInformation'],
//     ])
//     .catch(() => {
//       setAddressModalVisible(true);
//       return false;
//     })
//     .then((isPassed = true) => {
//       if (isPassed) {
//         form.validateFields().then((values) => {
//           save(values);
//         });
//       }
//     });
// } else {
//   form.validateFields().then((values) => {
//     save(values);
//   });
// }


// form.getFieldValue('afterDeliverSupportSaleType')?.includes(2) ? success() : fail();


// new Promise((resolve) => {
//   if (form.getFieldValue('afterDeliverSupportSaleType')?.includes(2)) {
//     resolve(
//       form
//         .validateFields([
//           ['returnGoodsAddress', 'detailAddress'],
//           ['returnGoodsAddress', 'addressee'],
//           ['returnGoodsAddress', 'contactInformation'],
//         ])
//         .catch(() => {
//           setAddressModalVisible(true);
//           return false;
//         }),
//     );
//     return;
//   }
//   resolve(true);
// }).then((isPassed) => {
//   console.log('🎯 isPassed==>', isPassed);
//   if (!isPassed) return;
//   form.validateFields().then((values) => {
//     save(values);
//   });
// });
