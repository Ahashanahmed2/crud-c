$("#post").submit(function(e){
e.preventDefault();
alert("your data post")
})


$("#edit").submit(function(e){
    e.preventDefault();

    var unindexed_array = $(this).serializeArray();
    let data ={};
    $.map(unindexed_array,function(n){
        data[n['name']]=n['value'];
    })

    console.log(data);
    let request = {
        "url":`https://crud-c.herokuapp.com/api/users/${data.id}`,
        "method":"PUT",
        "data":data

    }
    $.ajax(request).done(function(response){
        alert("Data Updated Successfully")
    })

});


if(window.location.pathname=='/'){
    $ondelete =  $(".table tbody td a.delete");
    $ondelete.click(function(){
       let id = $(this).attr("id");

       let request = {
        "url":`https://crud-c.herokuapp.com/api/users/${id}`,
        "method":"delete"
    }

  if(confirm(`this is ${id} is delete ?`)){
      $.ajax(request).done(function(){
          alert(`your ${id} delete`)
      })
  }

    })

   
}
