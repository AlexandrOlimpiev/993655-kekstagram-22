const creatComment = ({ avatar, name, message }) => {
  const templateComment = `
<li class="social__comment">
  <img class="social__picture" src="${avatar}" alt="${name}" width="35" height="35">
  <p class="social__text">${message}</p>
</li>`;
  const auxiliaryElement = document.createElement('div')
  auxiliaryElement.innerHTML = templateComment;
  return auxiliaryElement.childNodes[1];
};

const renderComments = (comments) => {
  const listComments = document.querySelector('.social__comments');
  listComments.innerHTML = '';
  const fragment = document.createDocumentFragment();
  comments.forEach(comment => {
    fragment.appendChild(creatComment(comment));
  });
  listComments.appendChild(fragment);
};

export { renderComments };
