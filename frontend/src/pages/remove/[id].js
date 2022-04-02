import React from 'react';
import { connect, useDispatch, useSelector} from 'react-redux';
import { Button } from 'react-bootstrap';
import { useRouter } from 'next/router';
import { deleteCompany, oneCompany, getCompany } from '../../app/reducers/companiesSlice';
import store from '../../app/store';

 function Remove() {
  const router = useRouter();
  const { id } = router.query;
  const dispatch = useDispatch();
  const company = useSelector(oneCompany);
  const handleClick = (e) => {
    e.preventDefault()
    router.push('/')
  }

  React.useEffect(() => {
    dispatch(getCompany(id))
  }, [id, dispatch])

  return (
    <div className="d-flex flex-column mt-5">
      <h1>Вы правда хотите удалить компанию {company.name}?</h1>
      <Button variant="danger" className="w-25 m-auto" onClick={() => {router.push('/'); dispatch(deleteCompany(company))}}>Да</Button>
      <Button variant="secondary" className="w-25 m-auto" onClick={handleClick}>Нет</Button>
    </div>
  );
}

export default connect(store)(Remove);
