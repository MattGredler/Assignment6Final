$( function(){

  $('.submit').on('click', function(event) {
    event.preventDefault();

    const newTask = {
      taskInput: $('#task-name').val().trim(),
    };

    for(let key in newTask){
      if(newTask[key] === ''){
        alert('Please fill out');
        return;
      }
    }

    console.log(newReservation);


    $.ajax({ url: '/api/tasks', method: 'POST', data: newTask}).then(
        function(data) {
  
          if (data.success) {
  
            console.log('data', data)
            if (!data.newTask) {
              alert('Task saved');
            }
  
            else {
              alert('To have more than ten tasks, please check out our premium version');
            }
  
            $('#task-name').val('');
            
            $('#task-name').focus();
          } else {
  
            alert('There was a problem with your submission. Please check your entry and try again.');
          }
          
  
        });
    });
  });
  