import React, {useEffect, useState} from 'react';
import AdminShow from './adminShow';
import SethAnimation from '../components/lottie/seth-animation'
import { getSubmittedApps, getPendingApps, getGradedApps, getInterviewBucketApps, getCouncilMemberListing } from '../api/firebase/admin/admin_applications';
import './styles/AdminStyles.scss'
import Previewapplication from './previewApplication';
import CouncilShow from './councilTabs';
import "react-draft-wysiwyg/dist/react-draft-wysiwyg.css";
import { EditorState, convertToRaw, draftToHtml, convertFromRaw } from 'draft-js';
import { Editor } from 'react-draft-wysiwyg';
import { setCouncilDocument } from '../api/firebase/auth';
import { setCouncilInfomation, deleteFunction } from '../api/firebase/admin/admin_applications';


const CouncilMember = ({check, newCouncil}) => {

    const dataPreview = {

        firstname : "",
        lastname : '',
        img : '',
        email : '',
        psw : '',
        track : [],
        uid : '',
        profile : "",
        internal : true

    }

    const councilStack = {

        councils : getCouncilMemberListing()

    }

    const [data, setData] = useState([])
    const [previewShow, setPreviewShow ] = useState(false)
    const [previewData, setPreviewData] = useState(dataPreview)
    const [appUID, setAppID] = useState({})
    const [input, setInput] = useState("")
    const [ v, x ] = useState("")
    const [src, setSrc] = useState("")
    const [edit, setEdit] = useState([])
    const [editorState, setEditorState] = useState({});
    const [internal, setInternal] = useState(previewData.internal)
    const [successModal, setSuccessModal] = useState(false);
    const [newModel, setNewModel] = useState({})


    useEffect(() => {
        
        councilStack.councils.then(e => setData(e));

    }, [newCouncil, newModel]);


    //console.log(previewData);


    const onEditorStateChange = (editorState) => {


        //const editorData = convertToRaw( editorState.getCurrentContent() )
        setEditorState( editorState )

    }


    const previewUser = (data, appuid) => {

        //show the modal
        setPreviewShow(true);

        //set the data in for viewing
        setPreviewData(data)

        document.body.style.overflow = "hidden";
        
    }

    const closePreviewUser = () => {

        //show the modal
        setPreviewShow(false);

        //set the data in for viewing
        setPreviewData({})

        document.body.style.overflow = "visible";
        
        //setInternal(true);  
    }

    useEffect(() => {

        if ( previewShow === !false ) {

            previewData.track.map( track => {
    
                const dom = document.querySelector(`.checkboxx #${track}`)
                
                dom !== null ? dom.checked = true : console.log("nothing on the dom yet")
    
            })

        }

        if (previewData.profile) {

            setEditorState(EditorState.createWithContent(convertFromRaw(previewData.profile) ))

        } else {

            setEditorState(EditorState.createEmpty())

        }

    }, [previewData]);

    
    const councilOnchange = (e) => {

        const {name, value} = e.target;
    
        setPreviewData( data => {

            return {

                ...data,
                [name] : value

            }
        })

    }

    useEffect(() => {
       
        if ( v !== '') {
            
            var reader = new FileReader();
            
            reader.onload = function(){

                var dataURL = reader.result;

                setSrc(dataURL);
                setData({...data, video : dataURL});

            };
            
            reader.readAsDataURL(v);            
        }

        const vid = document.getElementById('output'); 

    }, [input]);


    const addTrackCouncil = () => {


        const checkbox = document.querySelectorAll('.checkboxx input')
        const rent = Array.from(checkbox)

        const newTrackList = []
        
        rent.forEach(track => {
            if (track.checked) {

                newTrackList.push(track.name)

            }
        })

        previewData.track = newTrackList;

    }

    const editorFinished = () => {

        const raw = convertToRaw( editorState.getCurrentContent() )
        previewData.profile = raw

    }

    const handleInternalChange = () => {

        const raw = convertToRaw( editorState.getCurrentContent() )
        previewData.profile = raw

    }


    const submitCouncilInfo = async () => {

        //setCouncilDocument(data.uid, data)
        addTrackCouncil();
        editorFinished();
        previewData.internal = internal;
        console.log(previewData)
        setCouncilInfomation(previewData.uid, previewData).then(() => {

            setSuccessModal(true);

            setTimeout(() => {

                setSuccessModal(false);
                closePreviewUser()
                
            }, 1000);

        })

    }

    const handleDelete = async () => {

        console.log("deleting...")

        deleteFunction("council", previewData.uid).then(() => {

            setSuccessModal(true);

            setNewModel(previewData)

            setTimeout(() => {

                setSuccessModal(false);
                closePreviewUser()
                
            }, 1000);

        })

    }

    console.log(previewData);

    
    return (

        <div className="applications-council applicationAdmin messup" style={{marginTop : "45px"}}>

            {
                previewShow ? (


                    <div className="previewCouncil">

                        {
                            successModal ? <div className="successModal">
                                <SethAnimation jsonSrc={"https://assets9.lottiefiles.com/packages/lf20_lk80fpsm.json"} lottieStyle = {{width: '200px', height: '200px'}} speed={"1"} /> 
                            </div>: null

                        }

                        <div className="closeModalCouncil" onClick={ () => closePreviewUser() }> <i className="fi fi-rr-cross-small"></i> </div>

                        <div className="councilInformation">

                            <div className="profileImageContainer">

                                <div className="profileImage"><img src={previewData.img} alt="council member Image" /></div>
                                
                                <div className="councilName"> 

                                    <div className="firstname-council"> {previewData.firstname} </div>
                                    <div className="lastname-council"> {previewData.lastname} </div>
                                
                                </div>

                                {/* <div className="uploadImage"><i className="fi fi-rr-upload"></i> Upload</div> */}

                                <div className="toggleArea">

                                    <p>Internal</p>

                                    <div className="toggleCouncilType" onClick = { () => setInternal(!internal) } >

                                        <div className={`${previewData.internal ? 'togglePin' : 'togglePin switch'}`}></div>
                                        

                                    </div>

                                    <p>External</p>

                                </div>

                                

                            </div>

                            <form action="">

                                <div className="gradeTrack"> <i className="fi fi-rr-user"></i> Personal Information</div>

                                <div className="inputForm">
                                    <input type="text" placeholder='Enter Council Firstname' value={previewData.firstname} name='firstname' id='firstname' onChange={councilOnchange}/>
                                </div>

                                <div className="inputForm">
                                    <input type="text" placeholder='Enter Council Lastname' value={previewData.lastname} name='lastname' id='lastname' onChange={councilOnchange}/>
                                </div>

                                <div className="inputForm">
                                    <input type="email" placeholder='Enter Council Valid Email Address' value={previewData.email} name='email' id='email' onChange={councilOnchange}/>
                                </div>

                                <div className="inputForm">
                                    <input type="text" placeholder='Enter Council Image Url' value={previewData.img} name='img' id='img' onChange={councilOnchange}/>
                                </div>

                                <div className="inputForm">
                                    <input type="text" placeholder='Enter Council Job Title' value={previewData.job || "No Job Discription Yet"} name='job' id='job'  onChange={councilOnchange}/>
                                </div>

                                <div className="inputForm">
                                    <input type="text" placeholder='Enter Council Linkedin Profile URL' value={previewData.linkedin || "No linkedin profile url yet"} name='linkedin' id='linkedin' onChange={councilOnchange}/>
                                </div>

                                <div className="select-box">

                                    <div className="gradeTrack"> <i className="fi fi-rr-checkbox"></i> Grading Track</div>

                                    <div className="checkboxx">
                                        <p>Innovation</p>
                                        <input type="checkbox"  name = 'innovation' id='innovation' value="innovation" />
                                    </div>

                                    <div className="checkboxx">
                                        <p>Research</p>
                                        <input type="checkbox" name = 'research' id='research' value="research" />
                                    </div>

                                    <div className="checkboxx">
                                        <p>Stem</p>
                                        <input type="checkbox" name = 'stem' id='stem' value="stem" />
                                    </div>

                                    <div className="checkboxx">
                                        <p>Secondary School</p>
                                        <input type="checkbox" name = 'secsch' id='secsch' value="secsch" />
                                    </div>
                                    
                                </div>

                            </form>

                            <div className="gradeTrack"> <i className="fi fi-rr-edit"></i> Council Profile </div>


                            <div className="editorDraft">

                                <Editor

                                    editorState={editorState}
                                    onEditorStateChange={onEditorStateChange}
                                    toolbar= {

                                        { options : [ 'inline', 'list'] }

                                    }
                                

                                />

                            </div>


                            <div className="button-submit" onClick={ () => submitCouncilInfo() }> Submit & Save </div>

                            <div className="deleteCouncilMember" onClick={() => handleDelete() }> <i className="fi fi-rr-trash"></i> Delete Member</div>

                        </div>

                        

                    </div>


                ) : null
            }

            <div className="tableHeaders itshead">

                <div className="tableHead"> Fullname </div>
                <div className="tableHead"> Track </div>
                <div className="tableHead"> Graded </div>
                <div className="tableHead"> Status </div>
                <div className="tableHead"></div>

            </div>

            {/* council Listings Here */}

            {
                data.length ? data.map((e, index) => {

                        return <CouncilShow data = {e.data} key = {e.id} showPrev = {previewUser} appuid = {e.id} />
                    }) : <div className="no-data-state">
                    <SethAnimation jsonSrc={"https://assets10.lottiefiles.com/packages/lf20_EMTsq1.json"} lottieStyle = {{width: '400px', height: '400px'}} speed={"1"} />

                    <p> Oops! There are no applicants yet </p>

                </div>
            }

        </div>

    );
}

export default CouncilMember;
