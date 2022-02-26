// Basic types
let id:number = 5
let company:string = 'Abdullah Ansari'
let isPublic:boolean = true
let x:any = 'any type can be stored'
let age:number

age = 30

let ids:number[] = [1, 2, 3, 4]
ids.push(2)

let arr:any[] = [1, true, 'hello']

// Tuple
let person:[number, string, boolean] = [1, 'Hamid', true]

// Tuple array
let employee: [number, string][]

employee = [
	[1, 'John'],
	[2, 'Jake'],
	[3, 'Gill'],
]

// Union
let pid: string | number = 3
let pid2: string | number = '3'

// Enum
enum Directions1 {
	Up = 1,
	Down,
	Right,
	Left
}

console.log(Directions1.Up)

enum Directions2 {
	Up = 'Up',
	Down = 'Down',
	Right = 'Right',
	Left = 'Left'
}

console.log(Directions2.Up)


// Objects
type User = {
	id: number,
	name: string
}
const user: User = {
	id: 1,
	name: 'John'
}

// Type assertion
let cid: any = 1;
// let customerID = <number>cid
let customerID = cid as number

// Functions
function addNumber(x:number, y:number):number {
	return x+y
}

console.log(addNumber(3, 4))

// Void (when you don't return anything)
function consoleMessage(message: string | number):void {
	console.log(message)
}

consoleMessage('i am message')

// Interfaces
interface UserInterface {
	readonly id: number		// this property is read only i.e. it can't be edited using user1.id
	name: string
	age?: number					// this poperty is optional as if ? is not added we can't define an object without that particular key
}

const user1:UserInterface = {
	id: 1,
	name: 'John'
}

// difference between type & interface is you can't use unions with type

type Point = number | string
// interface Point = number | string --- this will give error
const point: Point = 2;

// interface with functions
interface MathFunc {
	(x:number, y:number) : number
}

const add: MathFunc = (x:number, y:number): number => x + y
const sub: MathFunc = (x:number, y:number): number => x - y


// Classes

interface PersonInterface {
	id: number
	name: string
	register(): string
}

class Person implements PersonInterface{
	// you can also add private or protected or public infornt of these
	id: number
	name: string

	constructor(id: number, name: string){
		// console.log(123)
		this.id = id
		this.name = name
	}

	register(){
		return `${this.name} is now registered`
	}
}

let brad = new Person(1, 'Brady Brad')
let john = new Person(2, 'John Pinto')

// console.log(john.register())
// console.log(brad, john);

// Extending Classes -> this is a subclass
class Employee extends Person {
	position: string

	constructor(id:number, name:string, position:string){
		super(id, name);
		this.position = position
	}
}

const emp = new Employee(5, 'Shawn', 'Developer')

console.log(emp);


// Generics

// creating a function that takes an array of any type and returns an array of any type
function getArray(items: any[]): any[]{
	return new Array().concat(items)
}

let numArray = getArray([1, 2, 3, 4]);
let strArray = getArray(['Brad', 'John', 'Jill'])

// since it take an array of any type it takes a string as well
numArray.push('Jack');
// since it take an array of any type it takes a number as well
strArray.push('Jack');

// To avoid such thing we can do this

function getArr<T>(items: T[]): T[]{
	return new Array().concat(items)
}

let nArray = getArr<number>([1, 2, 3, 4]);
let sArray = getArr<string>(['Brad', 'Jack', 'John', 'Jill']);

// nArray.push('Jack')		// This is not allowed now since it will take an array of type number only as defined while declaring
// sArray.push(1)					// This is not allowed now since it will take an array of type string only as defined while declaring