var socket = io.connect('http://localhost:5000/');
// alert(socket)
// socket.on('connect', function(){
//   alert("connect before");
//   socket.emit("my event",{data:'connected'});
//   alert("connect after");
// });


socket.on('answer',function(data) {
// append the bot repsonse to the div

  $('.chat-container').append(`<div class="chat-message bot-message" id="bMsg">
  ${data.message}
  </div>`)
  $('.chat-container').scrollTop(1000);

  // remove the loading indicator
  $( "#loading" ).remove();
});


    // $('#pfeedback').on('submit', function(e){
    //   e.preventDefault();
    //   $post("/positive_feedback",{message:message, response:data.message}, handle_feedback);
    //   function handle-feedback(){
    //
    //   }
    //
    // });
    // $('#nfeedback').on('submit', function(e){
    //   e.preventDefault();
    //
    // });

    $('#target').on('submit', function(e){
            e.preventDefault();
            //alert("hi");
            const input_message = $('#input_message').val()
            // return if the user does not enter any text
            if (!input_message) {
              return
            }

            $('.chat-container').append(`
                <div class="chat-message human-message">
                    ${input_message}
                </div>
            `)

            // loading
            $('.chat-container').append(`
                <div class="chat-message text-center col-md-2 offset-md-10 bot-message" id="loading">
                    <b>...</b>
                </div>
            `)

            // clear the text input
            $('#input_message').val('')


            // send the message
            socket.emit('question',{question:input_message})
            //submit_message(input_message)
        });
