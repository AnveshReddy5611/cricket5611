import {createSlice} from '@reduxjs/toolkit'

export const randomslice=createSlice({
    name:"random",
    initialState:{
        value1:0,
        value:{},
        formvalues:{},
        overs:0,
        wickets:0,
        team:"",
        result:"",
        secondwickets:0,
        secondovers:0,
        secondscore:0,
        flag:1,
        matches:[{SNo:"1",Match:"INDVSPAK",overs:5,Team1:"IND",Team2:"PAK",format:"T20",Venue:"India,Hyderabad",Time:"11:12(IST)", starttime:"11:12",endtime:"11:27"},
        {SNo:"2",Match:"ENGVSAUS",Team1:"ENG",overs:5,Team2:"AUS",format:"T20",Venue:"England,Oval",Time:"11:12(IST)",starttime:"11:12",endtime:"11:27"},
        {SNo:"3",Match:"SAVSWI",Team1:"SA",overs:5,Team2:"WI",format:"T20",Venue:"SA,Bredasdorp",Time:"11:12(IST)",starttime:"11:12",endtime:"11:27"}]
        , formvalues:{},
        TEAM1:"",
        TEAM2:""
    
    },
    reducers:{
        save:(state,action)=>{
            console.log(action.payload,"action.payload")
            state.value=action.payload
            console.log(state.value,"state.value")
        },
        setscore:(state,action)=>{
            state.value1=state.value1+action.payload
            console.log(state.value1,"state.value")
        },
        setwickets:(state,action)=>{
            state.wickets=state.wickets+action.payload
            console.log(state.wickets,"state.wickets")
        },
        setOvers:(state,action)=>{
            state.overs=action.payload
        },
        secondsetscore:(state,action)=>{
            state.secondscore=state.secondscore+action.payload
            console.log(state.secondscore,"state.secondscore")
        },
        secondsetwickets:(state,action)=>{
            state.secondwickets=state.secondwickets+action.payload
            console.log(state.secondwickets,"state.secondwickets")
        },
        secondsetOvers:(state,action)=>{
            state.secondovers=action.payload
        },
        setFlag:(state,action)=>{
            state.flag=action.payload

        },
        teamselected:(state,action)=>{
            state.team=action.payload
        },
        setvalues:(state,action)=>{
            state.formvalues=action.payload

        },
        compare:(state)=>{
            if(state.secondscore>state.value1){
                state.result=state.TEAM2
            }
            else if(state.value1>state.secondscore){
                state.result=state.TEAM2
            }
            else{
                state.result="Tie"
            }
        },
        TEAM1:(state,action)=>{
            state.TEAM2=action.payload

        },
        TEAM2:(state,action)=>{
            state.TEAM1=action.payload

        }


    }

})
export const {TEAM1,TEAM2,save,setwickets,compare,teamselected,setvalues,setscore,setOvers,secondsetwickets,secondsetscore,secondsetOvers,setFlag}=randomslice.actions
export default randomslice.reducer