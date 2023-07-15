class Config{
    static logginUrl="http://127.0.0.1:8000/api/gettoken/"
    static homeUrl="/home"
    static logoutPageUrl="/logout"
    static refreshApiUrl ="http://127.0.0.1:8000/api/refresh_token/"
    static companyApiUrl ="http://127.0.0.1:8000/api/company/"
    static companyBankApiUrl ="http://127.0.0.1:8000/api/companybank/"
    static companyOnly ="http://127.0.0.1:8000/api/companyonly/"
    static medicineApiUrl = "http://127.0.0.1:8000/api/medicine/";
    static companyAccountApiUrl = "http://127.0.0.1:8000/api/companyaccount/";
    static employeeApiURL = "http://127.0.0.1:8000/api/employee/";
    static employeeBankApiUrl = "http://127.0.0.1:8000/api/employee_all_bank/";
    static employeeBankApiUrlBYID = "http://127.0.0.1:8000/api/employee_bankby_id/";
    static employeeSalaryApiUrl = "http://127.0.0.1:8000/api/employee_all_salary/";
    static medicineNameApiUrl = "http://127.0.0.1:8000/api/medicinebyname/";
    static generateBillApiUrl = "http://127.0.0.1:8000/api/generate_bill_api/";
    static employeeSalaryByIdApiUrl ="http://127.0.0.1:8000/api/employee_salaryby_id/";
    static customerRequestApiUrl ="http://127.0.0.1:8000/api/costumer_request/";
    static homeApiUrl ="http://127.0.0.1:8000/api/home_api/";

    static sidebarItem = [
        {index:0, title:"Home", url:"/home", icons:"home"},
        {index:1, title:"Company", url:"/company", icons:"business"},
        {index:2, title:"Manage Company Account", url:"/manageCompanyAccount", icons:"account_balance"},
        {index:3, title:"Add Medicine", url:"/addMedicine", icons:"local_hospital"},
        {index:4, title:"Manage Medicine", url:"/manageMedicine", icons:"library_add"},
        {index:5, title:"Generate Bill", url:"/generateBill", icons:"attach_money"},
        {index:6, title:"Manage Employee", url:"/employeeManage", icons:"people"},
        {index:7, title:"Custumer Request", url:"/custumerRequest", icons:"contact_mail"},
    ]
}
export default Config;