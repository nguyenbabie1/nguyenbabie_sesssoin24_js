let arr = [];
let choice;
let menu = `
Menu----------------------------------
1. Nhập mảng số nguyên
2. Hiển thị mảng
3. Tìm phần tử lớn nhất trong mảng và in ra chỉ số của nó
4. Tính tổng và trung bình cộng của các số dương trong mảng
5. Đảo ngược mảng
6. Kiểm tra mảng có đối xứng không
7. Thoát chương trình`;
while (choice !== 7) {
    choice = +prompt(menu);
    switch (choice) {
        case 1:
            let number = +prompt("Mời bạn nhập số lượng phần tử");
            arr = [];
            for (let i = 0; i < number; i++) {
                let newElenment = +prompt(`Nhập phần tử thứ${i + 1}`);
                arr.push(newElenment)
            }
            alert("Mảng đã được cập nhật thành công:" + arr.join(","));
            break;
        case 2:
            alert("Mảng hiện tại:" + arr.join(","));
            break;
        case 3:
            let max = arr[0];
            for (let i = 1; i < arr.length; i++) {
                if (arr[i] > max) {
                    max = arr[i];
                }
            }
            alert(`Phần tử lớn nhất: ${max}`);
            break;
        case 4:
            let sum = 0;
            let count = arr.length;
            for (let i = 0; i < count; i++) {
                sum += arr[i];
            }
            alert(`Tổng các phần tử:${sum}`);
            let avr = sum / count
            alert(`Trung bình cộng là:${avr}`);
            break;
        case 5:
            if (arr.length === 0) {
                alert("Mảng rỗng, không thể đảo ngược.");
                break;
            }
            for (let i = 0, j = arr.length - 1; i < j; i++, j--) {
                let temp = arr[i];
                arr[i] = arr[j];
                arr[j] = temp;
            }
            alert(`Mảng sau khi đảo ngược: ${arr.join(", ")}`);
            break;
        case 6:
            if (arr.length === 0) {
                alert("Mảng chưa được nhập!");
            } else {
                arr.reverse();
                alert("Đã đảo ngược các hàng trong mảng!");
            }
            break;

            break;


    }

}

