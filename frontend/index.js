let url = "http://localhost:8080/promotions";
getAll();
function getAll() {
  const tbody = document.getElementById("table-content");
  $.ajax({
    url: url,
    method: "GET",
    success: function (data) {
      console.log(data);
      let row = "";
      for (let index = 0; index < data.length; index++) {
        row += `
        <tr>
          <td>${data[index].title}</td>
          <td>${data[index].startDate}</td>
          <td>${data[index].endDate}</td>
          <td>${data[index].discountRate}</td>
          <td>${data[index].details}</td>
          <td>
            <button onclick="toFormEdit(${data[index].id})" class="btn btn-warning">
              <i class="fa-solid fa-pen"></i>
            </button>
          </td>
          <td>
            <button class="btn btn-danger" onclick="deletePromotion(${data[index].id})">
              <i class="fa-solid fa-trash-can"> </i>
            </button>
          </td>
        `;
      }
      tbody.innerHTML = row;
    },
  });
}

function deletePromotion(id, title) {
  console.log(1);
  if (confirm(`Bạn có chắc muốn xoá không?`)) {
    $.ajax({
      url: `http://localhost:8080/promotions/delete/${id}`,
      method: "DELETE",
      success: function (data) {
        alert("Xoá thành công");
        getAll();
      },
    });
  }
}

function toFormCreate() {
  window.location.href = "create.html";
}

function toFormEdit(id) {
  window.location.href = `edit.html?id=${id}`;
}
