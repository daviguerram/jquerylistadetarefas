$(document).ready(function () {
    var tasks = [];

    function updateTaskList() {
        $('#taskList').empty();
        tasks.forEach(function (task, index) {
            var listItem = $('<li class="task-item"></li');
            listItem.text(task);
            $('#taskList').append(listItem);
        });
    }

    function addTask(taskName) {
        if (taskName.trim() !== '') {
            tasks.push(taskName);
            updateTaskList();
            $('#taskInput').val('');
        }
    }

    function removeTask(index) {
        tasks.splice(index, 1);
        updateTaskList();
    }

    $('#taskInput').keypress(function (e) {
        if (e.which === 13) {
            addTask($(this).val());
        }
    });

    $('#addTaskBtn').click(function () {
        addTask($('#taskInput').val());
    });

    $('#taskList').on('click', 'li', function () {
        var taskIndex = $(this).index();
        removeTask(taskIndex);
    });
});
