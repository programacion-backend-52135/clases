const suma = (...nums) => {
    if(nums.length === 0) return 0
    if(nums.some(num => typeof(num) !== 'number')) return null
    
    return nums.reduce((count, sum) => count + sum, 0)
}

let testPASSED = 0
const testTOTAL = 4


console.log("\nTest 1. Must return null if any params is not number")
const resultTest1 = suma("2", 2)
if(resultTest1 === null) { console.log("Test 1: PASS"); testPASSED++ }
else console.log(`Test 1: FAIL. result is ${resultTest1} (${typeof(resultTest1)})`)

console.log("\nTest 2. Must return 0 if there is not params")
const resultTest2 = suma()
if(resultTest2 === 0) { console.log("Test 2: PASS"); testPASSED++ }
else console.log(`Test 2. FAIL. result is ${resultTest2}`)

console.log("\nTest 3. The sum must be correct")
const resultTest3 = suma(2, 3)
if(resultTest3 === 5) { console.log("Test 3: PASS"); testPASSED++ }
else console.log(`Test 3. FAIL. result is ${resultTest3}`)

console.log("\nTest 4. The sum must be correct with many params")
const resultTest4 = suma(1, 2, 3, 5, 10)
if(resultTest4 === 21) { console.log("Test 4: PASS"); testPASSED++ }
else console.log(`Test 4. FAIL. result is ${resultTest4}`)


console.log(`\n\nPasaron ${testPASSED} testing of ${testTOTAL}`)