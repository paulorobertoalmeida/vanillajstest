// defininimg main clases
class FormulaPage {
  constructor(products) {
    this.productList = products;
    this.state = 'DISPLAY';
  }
  // Setting Page view
  setView() {
    this.productList.forEach((product, index) => {
      const productNotModified = `
      <div class="product-container">
      <h2 class="product-container__title">${product?.name}</h2>
      <img
        class="product-container__image"
        src="https://via.placeholder.com/150"
        alt="product"
      />
      <h3 class="product-container__title">Original price</h3>
      <span class="product-container__title">${product?.price}€</span>
      </div>
      `;

      const productModified = `
      <div class="product-container">
      <h2 class="product-container__title">${product?.name}</h2>
      <img
        class="product-container__image"
        src="https://via.placeholder.com/150"
        alt="product"
      />
      <h3 class="product-container__title">Modified price</h3>
      <span class="product-container__title" id="product-formulaPrice-${index}">${product?.formulaPrice}€</span>
      </div> 
      // Using formula to put the logic on page
      `;

      const formula = `
      <form class="formula-container" id="formula-${index}">
        <input
        class="formula-container__input"
        id="formula-input-${index}"
        disabled=true
        type="text"
        name="formula-input"
        placeholder=${product.formula ? product.formula : '""'}
        />
        <div class="formula-container__edit-buttons" id=${index}-buttons>
            <button
            type="button"
            onclick=handleEdit(${index})
            >
            Edit
        </div>
        </button>
      </form>
    `;
      const elements = productNotModified + formula + productModified;
      document.getElementById('product-list').innerHTML += `<article class="products-container__articles">${elements}</article>`;
    }); 
  }
  renderFormula(index) {
    let disabledInput;
    if (this.state === 'DISPLAY') {
      this.component = `
        <button
        type="button"
        onclick=handleEdit(${index})
        >
        Edit
        </button>
        `;
      disabledInput = true;
    } else {
      // onClick button changes
      this.component = `
        <button
        type="button"
        onclick=handleSave(${index})
        >
        Save
        </button>
        <button
        type="button"
        onclick=handleCancel(${index})
        >
        Cancel
        </button>
        <button
        type="button"
        onclick=handleDelete(${index})
        >
        Delete
        </button>
        `;
      disabledInput = false;
    }
    document.getElementById(`formula-input-${index}`).disabled = disabledInput;
    document.getElementById(`${index}-buttons`).innerHTML = this.component;
  }

  renderNewPrice(index, price) {
    this.price = price;
    document.getElementById(`product-formulaPrice-${index}`).innerHTML = `${price}€`;
  }

  renderInvalidInput(index) {
    document.getElementById(`formula-input-${index}`).className = 'formula-container__input--valid';
  }

  renderValidInput(index) {
    document.getElementById(`formula-input-${index}`).className = 'formula-container__input';
  }
}
