let list = document.querySelectorAll('.likely .status ul li');

list.forEach(li => li.addEventListener('click', evt => {
    let target = evt.currentTarget,
    input = target.querySelector('input'),
    messageBox = target.parentNode.parentNode.nextElementSibling;
    if (target.classList.contains('active')) {
        target.classList.remove('active');
        input.checked = false;
        messageBox.classList.remove('active');
    } else {
        input.checked = true;
        list.forEach(li => li.classList.remove('active'));
        target.classList.add('active');
        messageBox.classList.add('active');
    }
}));


let voteList = document.querySelectorAll('.vote .vote__numbers ul li');

voteList.forEach(li => li.addEventListener('click', evt => {
    let target = evt.currentTarget,
        input = target.querySelector('input'),
        messageBox = target.parentNode.parentNode.nextElementSibling;
    if (evt.currentTarget.classList.contains('active')) {
        target.classList.remove('active');
        messageBox.classList.remove('active');
        input.checked = false;
    } else {
        input.checked = true;
        voteList.forEach(li => li.classList.remove('active'));
        target.classList.add('active');
        messageBox.classList.add('active');
    }
}));

document.querySelectorAll('.close').forEach(btn => btn.addEventListener('click', e => {
    let parent = e.currentTarget.parentNode;
    parent.classList.add('hide');
    e.preventDefault();
}));