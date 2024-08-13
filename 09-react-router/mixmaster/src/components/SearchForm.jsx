import { Form } from "react-router-dom";

const SearchForm = ({ searchTerm }) => {
  return (
    <div className='search-container'>
      {/* Different from Newsletter.jsx, here Form's method is get! So that when the Form's submit event is triggered, '?' + 'search' (input name) + '=' + input value will be appended to current url! Since this component is in Landing route, Landing route's loader function should have a { request } argument to access the input value! */}
      <Form className="form">
        <input className="form-input" type="search" name="search" defaultValue={searchTerm} />
        <button className='btn'>Search</button>
      </Form>
    </div>
  );
}

export default SearchForm;