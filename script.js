function selectBox(selected) {
  const boxes = document.querySelectorAll('.box');
  boxes.forEach(box => {
    box.classList.remove('selected');
    box.querySelector('input[type="radio"]').checked = false;
    const content = box.querySelector('.box-content');
    if (content) content.classList.add('hidden');
  });

  selected.classList.add('selected');
  selected.querySelector('input[type="radio"]').checked = true;
  const expandedContent = selected.querySelector('.box-content');
  if (expandedContent) expandedContent.classList.remove('hidden');

  // Update total
  const price = selected.dataset.price;
  document.getElementById('totalPrice').innerText = `$${price} USD`;
}
