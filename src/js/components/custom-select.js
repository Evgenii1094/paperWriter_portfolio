const setDefaultValues = () => {
    const resultElement = document.querySelector(".hero-form__sum");
    const typeOfWorkItem = document.querySelector("[data-selected-type='typeOfWork']");
    const academicLevelItem = document.querySelector("[data-selected-type='academicLevel']");
    const urgencyItem = document.querySelector("[data-selected-type='urgency']");

    const defaultValues = {
        typeOfWork: 15,
        academicLevel: 1,
        urgency: 1.17,
    };

    typeOfWorkItem.textContent = "Writing";
    academicLevelItem.textContent = "High School";
    urgencyItem.textContent = "15+ days";

    const result = calculateResult(defaultValues);
    resultElement.textContent = `$${result.toFixed(2)}`;
};

const customSelect = () => {
    const customSelects = document.querySelectorAll(".hero-form__custom-select");
    const resultElement = document.querySelector(".hero-form__sum");

    let selectedValues = {
        typeOfWork: 15,
        academicLevel: 1,
        urgency: 1.17,
    };

    customSelects.forEach((select) => {
        const selectedItem = select.querySelector(".hero-form__selected-item");
        const dropdown = select.querySelector(".hero-form__dropdown");
        const options = dropdown.querySelectorAll(".hero-form__option");

        selectedItem.addEventListener("click", () => {
            dropdown.classList.toggle("is-open");
        });

        document.addEventListener("click", (e) => {
            if (!select.contains(e.target)) {
                dropdown.classList.remove("is-open");
            }
        });

        options.forEach((option) => {
            option.addEventListener("click", () => {
                const type = selectedItem.getAttribute("data-selected-type");
                const value = parseFloat(option.getAttribute("data-value"));
                selectedValues[type] = value;

                const result = calculateResult(selectedValues);
                resultElement.textContent = `$${result.toFixed(2)}`;

                selectedItem.textContent = option.textContent;

                dropdown.classList.remove("is-open");
            });
        });
    });
};

const calculateResult = (values) => {
    const result = Object.values(values).reduce((acc, value) => acc * value, 1) / 3;
    return result;
};

export {customSelect, setDefaultValues};
