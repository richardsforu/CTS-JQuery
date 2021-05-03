
$(document).ready(function () {

    var allPosts = [];

    var apiUrl="http://localhost:3000/api/posts";

        // laod all posts from server side throgh XHR call

        $.ajax(apiUrl,{
            method:"GET",
            success:function(posts){
                allPosts=posts;
                renderAllPosts();
            }
        });

    // remder All posts
    var $allPostsDiv = $('#all-posts');

    function renderAllPosts() {
        $allPostsDiv.children().remove();
        allPosts.forEach(function (post, idx) {
            var postTemplate = `
            
            <div class="list-group-item">
                 <div class="alert alert-info">
                      Name: <span class="badge bg-primary">${post.name}</span>
                     <hr/>
                     <p>${post.comment}</p>
                </div>
            </div>
            
            `;
            $allPostsDiv.append($(postTemplate));

        })
    }

    $('#post-form').on('submit', function (e) {
        e.preventDefault();

        var $nameField = $('#post-form-name', $(this));
        var $commentField = $('#post-form-comment', $(this));
        //------------------------------------------------------

        //validate

        var name = $nameField.val();
        if (!name) {
            $nameField
                .after($('<div class=text-danger>Name is Required</div>'))
                .closest('div')
            //.addClass('invalid-feedback');
            return;
        }

        //-------------------------------------
        //read from data in json format

        var newPost = {
            name: $nameField.val(),
            comment: $commentField.val()
        }


        // posting new post to mongo DB
        $.ajax(apiUrl,{
            method: 'POST',
            contentType: 'application/json',
            data:JSON.stringify(newPost),
            success: function(post){
                allPosts.push(newPost);
                renderAllPosts();
            }
        });

       // console.log(newPost);

      //  allPosts.push(newPost);
       // renderAllPosts();
        $nameField.val('').focus();
        $commentField.val('');
        //console.log('form has submited');
      //  console.log(allPosts.length);


    })
})