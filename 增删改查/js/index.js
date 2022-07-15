
//点击保存按钮获取表单数据并追加到页面
let add = document.querySelector('.add')
let name = document.querySelector('.username')
let number = document.querySelector('.number')
let age = document.querySelector('.age')
let school = document.querySelector('.school')
let salary = document.querySelector('.salary')
add.addEventListener('click', () => {

    var tbody = document.querySelector('.tbody')
    // let tr = document.createElement('tr')

    let html = '';
    html += ` <tr>
                        <td scope="row">${name.value}</td>
                        <td>${number.value}</td>
                        <td>${school.value}</td>
                        <td>${age.value}</td>
                        <td>${salary.value}</td>
                        <td>
                        <button type="button" class="btn btn-danger btn-sm btn-del">删除</button>
                        <button type="button" class="btn btn-warning btn-sm btn-modify">修改</button>
                        </td>
                    </tr>`
    //将内容追加到页面
    tbody.innerHTML = html;

    let del = document.querySelector('.btn-del')
    //点击删除按钮
    // console.log(del);
    del.addEventListener('click', () => {
     
    })


})
//点击重置
let nu = document.querySelector('.nu')
nu.addEventListener('click', () => {
    name.value = ''
    number.value = ''
    school.value = ''
    age.value = ''
    salary.value = ''
})






