function myClass(){

    class Thermostat{

    constructor(temp){
            this._temp = 5/9 * (temp - 32);
        }    
    get temperature(){
        return this._temp;
    }
    set temperature(updatedTemp){
        this._temp = updatedTemp;
    }
}
    return Thermostat;
}

// 声明一个变量 Thermostat 为 myClass 函数
const Thermostat = myClass();
// 声明一个变量 thermos 为一个新的对象，继承 Thermostat 对象，参数为 76
const thermos = new Thermostat(76);
// 声明一个变量 temp 为 thermos 传入 76  后 获得 第一次构造函数计算后的结果
let temp = thermos.temperature;

// 将 temp 更新为 26
thermos.temperature = 26 ;
temp = thermos.temperature;

// 打印出 temp
console.log(temp)
