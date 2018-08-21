(function ($) {
  console.log('Hello', $)

  $(document).ready(function () {

    const listData = function () {
      $.get('http://localhost:3000/bills/', function (result) {
        console.log(result)

        if (!result.length && !result.status) {
          return;
        }

        $('#list_table tbody').empty()

        result.data.forEach(function (bill) {
          let template = '<tr> ' +
            '	<td>' + bill.title + '</td> ' +
            '	<td>' + bill.price + '</td> ' +
            '	<td><a href="http://localhost:3000/address/' + bill.cep + '" target="_blank">' + bill.cep + '</a></td> ' +
            '	<td> <button type="button" id="btn_delete" class="btn btn-danger btn-small" data-id=' + bill._id + '>Delete</button>'
          '</tr> '

          $('#list_table tbody').append(template)
        })
      })
    }

    const createData = function () {
      let title = $('input[name="title"]').val()
      let price = $('input[name="price"]').val()

      if (!title || !price) {
        console.log("Invalid Body")
        return
      }

      $.post('http://localhost:3000/bills/', { title: title, price: price }, function (result) {
        // clear form
        $('input[name="title"]').val('')
        $('input[name="price"]').val('')

        // list
        listData()
      })
    }

    listData()
    $('#btn_create').on('click', createData)
  })

})(jQuery)