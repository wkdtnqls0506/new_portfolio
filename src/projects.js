'use strict';

// 프로젝트 필터링 관련 로직 처리
const categories = document.querySelector('.categories');
const projects = document.querySelectorAll('.project');
const projectsContainer = document.querySelector('.projects');
categories.addEventListener('click', (event) => {
    const filter = event.target.dataset.filter;
    if (filter == null) {  // filter를 가지고 있지 않은 요소를 클릭했을 경우
        return;
    }
    handleActiveSelection(event.target);
    filterProjects(filter);
});

function handleActiveSelection(target) {  // Active 메뉴 재설정
    const active = document.querySelector('.category--selected');
    active.classList.remove('category--selected');
    target.classList.add('category--selected');
}

function filterProjects(filter) {  // 프로젝트 필터링
    projects.forEach(project => {
        console.log(project.dataset.type);
        if (filter === 'all' || filter === project.dataset.type) {
            project.style.display = 'block';
        } else {
            project.style.display = 'none';
        }
    });
    projectsContainer.classList.add('anim-out');
    setTimeout(() => {
        projectsContainer.classList.remove('anim-out');
    }, 250);
}