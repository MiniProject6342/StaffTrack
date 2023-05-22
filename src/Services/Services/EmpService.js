import axios from 'axios'
const reject='http://localhost:8088/api/leaves/reject';
const approve='http://localhost:8088/api/leaves/approve';
const check=''
class EmpService{
    ChangeApprove(empid)
    {
        return axios.put(approve+'/'+empid)
    }
    ChangeReject(empid)
    {
        return axios.put(reject+'/'+empid)
    }
    checkstatus(empid)
    {
        return axios.get(check+empid)
    }
}
export default new EmpService();