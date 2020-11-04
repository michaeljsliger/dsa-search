// 1
// 3 recursive calls 
// 11, 6, 8
// 11, 14, 15, ... not found

// 2
// React UI
// import react
/*
class Input extends React.Component {
    state = {
        input: '',
        find: '',
        output: [],
    }

    onInputChange = (e) => {
        this.setState({input: e})
    }

    onFindChange = (e) => {
        this.setState({find: e})
    }

    onSubmit = (e) => {
        e.preventDefault();
        // '1, 2, 3, 4, 5, 6' ... etc
        arr = this.state.input.split(', ')

        return linearFind(arr, this.state.find);
        return binaryFind(arr.sort(), this.state.find);
    }

    render() {
        return (
            <div>
            <form onSubmit={e => this.handleSubmit(e)}>
            <label for="input-find">Find:</label>
            <input type="text" 
                onChange={(e) => this.onFindChange(e.target.value)}
            />
            <label for="input-id">Input:</label>
            <input type="textarea" name="input-id"
                onChange={(e) => this.onInputChange(e.target.value)}
            />
            <button type="submit">Submit</button>
            </form>
            <div>
            <p>{this.state.output}</p>
            </div>
            </div>
        )
    }
}
*/

function linearFind(arr, find) {
    let count = 0;
    for (let i = 0; i < arr.length; i++) {
        count++;
        if (arr[i] == find) {
            return [arr[i], count];
        }
    }
}

function binaryFind(sortedArr, find, start = 0, end = sortedArr.length, count = 0) {
    count += 1;
    
    const index = Math.floor((start + end) / 2);
    console.log(index, sortedArr[index]);

    if (sortedArr[index] === find) {
        return [sortedArr[index], count];
    } else if (sortedArr[index] < find) {
        return binaryFind(sortedArr, find, index + 1, end, count);
    } else if (sortedArr[index] > find) {
        return binaryFind(sortedArr, find, start, index - 1, count);
    }
}

const arr1 = [
    89, 30, 25, 32, 72, 70, 51, 42, 25, 24, 53, 55, 78, 50, 13, 40, 48, 32, 26, 2, 14, 33, 45, 72, 56, 44, 21, 88, 27, 68, 15, 62, 93, 98, 73, 28, 16, 46, 87, 28, 65, 38, 67, 16, 85, 63, 23, 69, 64, 91, 9, 70, 81, 27, 97, 82, 6, 88, 3, 7, 46, 13, 11, 64, 76, 31, 26, 38, 28, 13, 17, 69, 90, 1, 6, 7, 64, 43, 9, 73, 80, 98, 46, 27, 22, 87, 49, 83, 6, 39, 42, 51, 54, 84, 34, 53, 78, 40, 14, 5,
];

// console.log(binaryFind(arr1.sort(), 72));
// console.log(binaryFind(arr1.sort(), 78));
// console.log(binaryFind(arr1.sort(), 1));

// 3
function deweyFind(decimal, title, library) {
    return library[decimal[0]][title];
}

// 6
// BFS
function rankedOfficers(root, officersInOrder = []) {
    const queue = [];
    // queue.shift() and queue.push(val);
    queue.push(root.value);
    while (queue.length) {
        const officer = queue.shift();
        officersInOrder.push(officer.value);

        if (officer.left) {
            queue.push(officer.left);
        }
        if (officer.right) {
            queue.push(officer.right);
        }
    }

    return officersInOrder;
}

// 7 Max Profit
function findMaxProfit(arr) {
    let max = 0;
    for (let i = 0; i < arr.length - 1; i++) {
        if (arr[i+1] - arr[i] > max) {
            max = arr[i+1] - arr[i];
        }
    }
    return max;
}

console.log(findMaxProfit([128, 97, 121, 123, 98, 97, 105]));