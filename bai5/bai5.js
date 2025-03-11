let n, m;
let arr = [];
let choice;
let menu = `
Menu ----------------------------------------------------------------
1. Nhập mảng 2 chiều
2. Hiển thị mảng
3. Tính tổng các phần tử trong mảng
4. Tìm phần tử lớn nhất trong mảng và chỉ số của nó
5. Tính trung bình cộng các phần tử của một hàng cụ thể
6. Đảo ngược các hàng trong mảng
7. Thoát chương trình
`;
while (choice !== 7) {
    choice = +prompt(menu);

    switch (choice) {
        case 1:
            n = +prompt("Nhập số hàng trong mảng: ");
            m = +prompt("Nhập số cột trong mảng: ");
            if (n > 0 && m > 0) {
                arr = [];
                for (let i = 0; i < n; i++) {
                    arr[i] = [];
                    for (let j = 0; j < m; j++) {
                        arr[i][j] = +prompt(`Nhập phần tử arr[${i}][${j}]: `);
                    }
                }
                alert("Mảng đã được nhập thành công!");
            } else {
                alert("Kích thước mảng không hợp lệ!");
            }
            break;

        case 2:
            if (arr.length === 0) {
                alert("Mảng chưa được nhập!");
            } else {
                let matrix = arr.map(row => row.join("\t")).join("\n");
                alert(`Mảng 2 chiều:\n${matrix}`);
            }
            break;

        case 3:
            if (arr.length === 0) {
                alert("Mảng chưa được nhập!");
            } else {
                let sum = arr.flat().reduce((acc, val) => acc + val, 0);
                alert(`Tổng các phần tử trong mảng là: ${sum}`);
            }
            break;
        }
    }
