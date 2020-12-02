class Tools {

  static numberFormat(num) {
    return Intl.NumberFormat().format(num);
  }

  /**
   * 
   * @param {number} num 数字
   * @param {number} s 保留几位小数
   */
  static toFixed(num, s) {
    // js自带的toFixed有精度丢失的问题, 如3.15保留一位精度是 3.1， 实际想要的是3.2
    let preNum = num >= 0 ? 0.5 : -0.5;
    let changenum = (parseInt(num * Math.pow(10, s) + preNum) / Math.pow(10, s)).toString();
    let index = changenum.indexOf(".");
    if (index < 0 && s > 0) {
      changenum = changenum + ".";
      for (let i = 0; i < s; i++) {
        changenum = changenum + "0";
      }
    } else {
      index = changenum.length - index;
      for (let i = 0; i < (s - index) + 1; i++) {
        changenum = changenum + "0";
      }
    }
    return changenum;
  }

  /*
   * 数字加千分位
   * thousandsFormat(2.335,2);//2.34 
   *thousandsFormat(2.35,1);//2.4
   *thousandsFormat(2.455,1);//2.5
   *thousandsFormat(-2.455,1);//-2.5
   *
   */
  static thousandsFormat(num, precision = 'default') {
    if (typeof num == "string" && !num.trim()) {
      return "";
    }
    if (num == undefined) {
      return;
    }

    if (isNaN(num)) {
      return num;
    }

    if (precision == 'default') {
      return this.numberFormat(num);
    }

    num = this.toFixed(parseFloat(num), precision) + '';

    if (!num.includes(".")) num += ".";
    return num
      .replace(/(\d)(?=(\d{3})+\.)/g, function ($0, $1) {
        return $1 + ",";
      })
      .replace(/\.$/, "");
  }
}

export default Tools;