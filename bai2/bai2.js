let arr = [];
let choice;
let menu = `
Menu ----------------------------------------------------------------
1. Nhập mảng số nguyên
2. Hiển thị mảng
3. Tìm các phần tử chẵn và lẻ
4. Tính trung bình cộng của mảng
5. Xóa phần tử tại vị trí chỉ định
6. Tìm phần tử lớn thứ hai trong mảng
7. Thoát chương trình`;
while (choice !== 7) {
    choice = +prompt(menu);
    switch (choice) {
        case 1:
            let number = +prompt("Mời bạn nhập số lương phần tử");
            arr = [];
            for (let i = 0; i < number; i++) {
                let newElenment = +prompt(`Nhập phần tử thứ ${i + 1}:`);
                arr.push(newElenment);

            }
            alert("Mảng đã được cập nhật thành công: " + arr.join(","));
            break;
        case 2:
            alert("Mảng hiện tại:" + arr.join(","));
            break;
        case 3:
            let chan = []
            let le = []
            for (let i = 0; i < arr.length; i++) {
                if (arr[i] % 2 == 0) {
                    chan.push(arr[i])
                } else {
                    le.push(arr[i])
                }
            }
            alert(`Số chẵn là${chan}`);
            alert(`Số lẻ là${le}`);
            break;
        case 4:
            let avr = 0;
            for (let i = 0; i < arr.length; i++) {
                avr += arr[i];

            }
            alert(`Trung binh cộng là:${(avr / arr.length).toFixed(2)}`)
            break;
        case 5:
            let index = +prompt("Nhập vị trí cần xóa");
            if (index >= 0 && index < arr.length) {
                arr.splice(index - 1, 1);
            }
            alert("Xóa thành công");
            break;
        case 6:
            {
                let max = arr[0];
                let secondMax = 0;
                console.log(arr);

                for (let i = 1; i < arr.length; i++) {
                    if (arr[i] > max) {
                        secondMax = max;
                        max = arr[i];
                    } else if (arr[i] > secondMax && arr[i] !== max) {
                        secondMax = arr[i];
                    }
                }
                alert(`Phần tử lớn thứ hai trong mảng là: ${secondMax}`);
                break;
            }
            case 7:
                break;
    }
}

