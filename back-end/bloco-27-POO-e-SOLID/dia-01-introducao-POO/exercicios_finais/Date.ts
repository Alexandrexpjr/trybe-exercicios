enum Months {
  'Janeiro',
  'Fevereiro',
  'Março',
  'Abril',
  'Maio',
  'Junho',
  'Julho',
  'Agosto',
  'Setembro',
  'Outubro',
  'Novembro',
  'Dezembro'
}

class Data {
  private _day: number;
  private _month: number;
  private _year: number;

  constructor(day: number, month: number, year: number) {
    if (!`${(day < 10 ? '0' + day : day)}/${month < 10 ? '0' + month : month}/${year}`.match(/[0-3][0-9]\/[0-1][0-9]\/(19|20)[0-9][0-9]/g)) {
      this._day = 1;
      this._month = 1;
      this._year = 1900;
    } else {
      this._day = day;
      this._month = month;
      this._year = year;
    }
  }

  get year() {
    return this._year
  }

  get month() {
    return this._month
  }

  get day() {
    return this._day
  }

  getMonthName():string {
    return Months[this._month + 1];
  }

  isLeapYear():boolean {
    const year = this._year;
    if (year % 4 !== 0) {
      return false;
    }
    if (year % 100 === 0) {
      if (year % 400 === 0) {
        return true
      }
      return false
    }
    return true
  }

  compare(data: Data): number {
    const data1 = new Date(this.year, this.month, this.day);
    const data2 = new Date(data.year, data.month, data.day);

    const sub = data1.getTime() - data2.getTime();

    if (sub === 0) {
      return 0;
    }
    if (sub > 0) {
      return 1;
    }
    return -1
  }
}

const data = new Data(10, 10, 2000);
const data2 = new Data(10, 10, 2000);
console.log(data2.compare(data));