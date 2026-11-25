const categoryOptions = [
    { id: 1, value: "food", label: "Food" },
    { id: 2, value: "shopping", label: "Shopping" },
    { id: 3, value: "transportation", label: "Transportation" },
    { id: 4, value: "entertainment", label: "Entertainment" },
    { id: 5, value: "other", label: "Other" }
];

const getCategoryLabel = (categoryValue) => {
    // alert(categoryValue)
    let result = categoryOptions.find(cat => cat.value === categoryValue)?.label || categoryValue
    //console.log('result: ', result)
    return result;
}

const monthFormatter = new Intl.DateTimeFormat("en-In", {
    month: 'long',
    year: 'numeric'
});
// result: November 2026


const getMonthKey = (dateString) => {
    const date = new Date(dateString);

    const year = date.getFullYear();
    const month = String(date.getMonth() + 1).padStart(2, "0")
    
    return `${year}-${month}`;
}
// result: 2026-11


const monthFilterOption = [
    { id: 1, value: "all", label: "All Time" },
    { id: 2, value: "2026-11", label: "November 2026" },
    { id: 3, value: "2026-10", label: "October 2026" }, 
    { id: 4, value: "2026-09", label: "September 2026" }, 
];


export { categoryOptions, getCategoryLabel, monthFormatter, getMonthKey, monthFilterOption };