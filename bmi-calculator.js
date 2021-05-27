class BmiCalculator {
  constructor(name, height, weight) {
    this.name = name;
    this.height = height;
    this.weight = weight;
  }

  displayResult() {
    console.log(`名前:${this.name}`);
    console.log(`身長:${this.height}cm`);
    console.log(`体重:${this.weight}kg`);
    console.log(`BMI:${this.getBmi()}`);
    console.log(`適正体重:${this.getStandardWeight()}kg`);
    console.log(`適正体重と比較:${this.getDiffStandardWeight()}kg`);
    console.log(`肥満度:${this.getObesityText()}`);
  }

  getBmi() {
    return (this.weight / (this.height / 100) ** 2).toFixed(1);
  }

  getStandardWeight() {
    return (22 * (this.height / 100) ** 2).toFixed(1);
  }

  getDiffStandardWeight() {
    return (this.weight - this.getStandardWeight()).toFixed(1);
  }

  getObesityText() {
    const bmi = this.getBmi();
    if (bmi < 18.5) {
      return '低体重';
    } else if (18.5 <= bmi && bmi < 25) {
      return '普通体重';
    } else if (25 <= bmi && bmi < 30) {
      return '肥満(1度)';
    } else if (30 <= bmi && bmi < 35) {
      return '肥満(2度)';
    } else if (35 <= bmi && bmi < 40) {
      return '肥満(3度)';
    } else {
      return '肥満(4度)';
    }
  }
}

const taroBmi = new BmiCalculator('田中太郎', 165, 55);
taroBmi.displayResult();
