import {ErrorMessage, Field, Form, Formik} from "formik";
import {useState} from "react";
import * as Yup from 'yup';
import {createSpotify} from "../service/SpotifyService";
import {useNavigate} from "react-router-dom";
import {toast} from "react-toastify";
const CreateSpotify =()=>{
    const [spotify,setSpotify]=useState({
       id:'',
        songName:'',
        singerName:'',
        musician:'',
        playtime:'',
        likes:0,
        statusMusic:"Lưu Trữ"
    });
    const validationSchema = Yup.object({
        songName: Yup.string()
            .required("Tên bài hát là bắt buộc"),
        singerName: Yup.string()
            .required("Ca sĩ là bắt buộc")
            .max(30, "Ca sĩ tối đa 30 ký tự"),
        musician: Yup.string()
            .required("Nhạc sĩ là bắt buộc")
            .max(30, "Nhạc sĩ tối đa 30 ký tự"),
        playtime: Yup.string()
            .required("Thời gian phát là bắt buộc")
            .matches(/^([0-5]?\d):([0-5]\d)$/, "Định dạng phải là mm:ss")
    });
    const navigate=useNavigate();
    const handleCreateSpotify= async (value)=>{
       await createSpotify(value);
       navigate('/spotify');
       toast.success('Đăng Kí Thành Công')
    }
    return(
      <>
          <h1 className="mb-4">Đăng Kí Bài Hát</h1>
          <Formik initialValues={spotify} onSubmit={handleCreateSpotify} validationSchema={validationSchema}>
              <Form className="row g-3">
                  <div className="col-md-6">
                      <label htmlFor="songName" className="form-label"> Nhập Tên Bài Hát</label>
                      <Field name={'songName'} className="form-control"></Field>
                      <ErrorMessage name={'songName'} style={{color: 'red'}} className="text-danger mt-1"
                                    component={'div'}></ErrorMessage>
                  </div>
                  <div className="col-md-6">
                      <label htmlFor="singerName" className="form-label">Nhập Ca Sĩ</label>
                      <Field name="singerName" className="form-control"/>
                      <ErrorMessage name="singerName" component="div" className="text-danger mt-1"/>
                  </div>
                  <div className="col-md-6">
                      <label htmlFor="musician" className="form-label">Nhập Nhạc Sĩ</label>
                      <Field name="musician" className="form-control"/>
                      <ErrorMessage name="musician" component="div" className="text-danger mt-1"/>
                  </div>
                  <div className="col-md-6">
                      <label htmlFor="playtime" className="form-label">Nhập Thời Gian Phát</label>
                      <Field name="playtime" className="form-control" placeholder={'hh:ss'}/>
                      <ErrorMessage name="playtime" component="div" className="text-danger mt-1"/>
                  </div>
                  <div className="col-12">
                      <button type="submit" className="btn btn-primary">
                          Đăng Ký
                      </button>
                  </div>
              </Form>
          </Formik>
      </>
    );
}
export default CreateSpotify;