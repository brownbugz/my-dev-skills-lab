// initialize form first
// type skills
// enter skills by clicking button after input

$('#btn').click(function(evt) {
    var whiteSpace = $('#space').hide;
    var inputSkills = $('#field').val();


/* sample code of adding rows
$('#addHome').on('click', function(evt){
  // get home object from new homes array
  var template = `
  <tr>
        <td>${home.advertise}</td>
        <td>1,664</td>
        <td>3</td>
        <td>2</td>
        <td>$279,500</td>
        <td><button class="btn btn-xs btn-danger">Remove</button></td>
      </tr>`;

  console.log(evt);
});
*/

// added skills should appear to a new row in the whiteSpace
    var newSkills = `
        <tr class="typeSkills"> //use to fadeOut//
            <td><button class="xBtn">X</button></td>
            <td class="skills">${inputSkills}</td>
        </tr>
        `;

// new typed skills to be appended
    $('table').append(newSkills);
    console.log(newSkills);

// after adding skills in whiteSpace, field should be emptied
    $('#field').val('');
    console.log('field cleared');

/* sample remove button code
$('#homes tbody').on('click', 'button', function () {
  $(this).closest('tr').fadeOut(1000, function () {
    // now that the tr is hidden, let's completely remove it from the DOM
    $(this).remove();
  });
*/

// remove xBtn
    $('.xBtn').on('click', function() {
        console.log('button disappears');

        var typeSkills = $(this).closest('tr');
        typeSkills.fadeOut(1000, function() {
            $(this).remove();
        });
    });
    
});