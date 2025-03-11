let arr = [];
let choice;
let menu = `
  MENU----------------------------------------------------------------
1. Nhập mảng
2. Hiển thị mảng
3. Tìm phần tử lớn nhất và nhỏ nhất trong mảng
4. Tính tổng các phần tử trong mảng
5. Tìm số lần xuất hiện của một phần tử trong mảng
6. Sắp xếp mảng tăng dần
7. Thoát chương trình`;
while (choice !== 7) {
    choice = +prompt(menu);
    switch (choice) {
        case 1:
            let number = +prompt("Mời bạn nhập số lượng phần tử của mảng:");
            arr = [];
            for (let i = 0; i < number; i++) {
                let newElement = +prompt(`Nhập phần tử thứ ${i + 1}:`);
                arr.push(newElement);
            }
            alert("Mảng đã được nhập thành công: " + arr.join(", "));
            break;
        case 2:
            alert("Mảng hiện tại: " + arr.join(", "));
            break;
        case 3:
            let max = arr[0];
            for (let i = 0; i < arr.length; i++) {
                if (max < arr[i]) {
                    max = arr[i];
                }
            }
            let min = max;
            for (let i = 0; i > arr.length; i++) {
                if (min > arr[i] && arr[i] !== max)
                    min = arr[i];
            }
            alert("Phần tử nhỏ nhất" + min);
            alert("Phần tử lớn nhất" + max);
            break;
        case 4:
            let sum = 0;
            for (let i = 0; i < arr.length; i++) {
                sum += arr[i];
            }
            alert(`Tổng các phần tử:${sum}`);
            break;
        case 5:
            let count = 0;
            let n = +prompt("Nhập sô cần tìm");
            for (let i = 0; i < arr.length; i++) {
                if (n === arr[i])
                    count += 1;
            }
            alert(`số lượng phần tử ${n} là ${count} lần`)
            break;
        case 6:
            arr.sort((a, b) => a - b);
            alert("Mảng sau khi sắp xếp tăng dần: " + arr.join(", "));
            break;
        case 7:
            break;
        default:
            alert("Nhập đúng vào");
            break;
    }
}
