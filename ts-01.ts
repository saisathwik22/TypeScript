// =======================
// 📘 TypeScript Basics
// =======================

// 🎯 Primitive Types
let str: string = "hello";
let num: number = 42;
let isActive: boolean = true;
let undef: undefined = undefined;
let n: null = null;
let big: bigint = 9007199254740991n;
let sym: symbol = Symbol("id");

// =======================
// 📝 Declaring Variables
// =======================

// 1. Type Annotation
let id: number = 5;
const username: string = "Alice";
var loggedIn: boolean = false;

// 2. Type Inference
let age = 25; // inferred as number
let city = "Paris"; // inferred as string
// age = "twenty five"; ❌ Error

// =======================
// 🔄 TS vs JS Typing
// =======================

// JavaScript (dynamic typing)
let jsId = 5;
jsId = 10;
jsId = "hello"; // allowed in JS

// TypeScript (no dynamic typing)
let tsId = 5; 
tsId = 10; 
// tsId = "hello"; ❌ Error

// =======================
// ⚡ Union Types
// =======================
let value: string | number = 100;
value = "one hundred"; // ✅
value = 200; // ✅
// value = true; ❌ Error

// =======================
// 📚 Arrays
// =======================

// 1. Typed Array
let numbers: number[] = [1, 2, 3, 4];
let strings: string[] = ["a", "b", "c"];

// 2. Heterogeneous Array with 'any'
let mixed: any[] = [1, "two", false, 4.5];

// 3. Union Type Array
let arr: (number | string | boolean)[] = [1, "100", false];

// 4. Tuples (fixed length + types)
let user: [number, string, boolean] = [1, "Alice", true];

// =======================
// 📦 'any' Type
// =======================
let x: any = 10;
x = "hello"; // ✅
x = false;   // ✅

// =======================
// ✅ End of File
// =======================
