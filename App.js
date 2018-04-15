
import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View
} from 'react-native';

import Main2 from './src/pages/Main2' 
import Login from './src/pages/Login'
import Main from './src/pages/Main'
import PersonalInfo from './src/pages/PersonalInfo'
import EmployeeBenefit from './src/pages/EmployeeBenefit'
import PerformanNReward from './src/pages/PerformanNReward'
import Others from './src/pages/Others'
import Admin from './src/pages/Admin'
import PAdminPayroll from './src/pages/PAdminPayroll'
import MngAndLearning from './src/pages/MngAndLearning'
import Resourcing from './src/pages/Resourcing'
import Outsourcing from './src/pages/Outsourcing'
import IconSet from './src/lib/IconSet'

import CutiHome from './src/pages/cuti/CutiHome'
import ApprovalCuti from './src/pages/cuti/ApprovalCuti'
import BlockLeaveCuti from './src/pages/cuti/BlockLeaveCuti'
import HistoriAbsensiCuti from './src/pages/cuti/HistoriAbsensiCuti'
import MonitorAbsensiCuti from './src/pages/cuti/MonitorAbsensiCuti'
import PengajuanCuti from './src/pages/cuti/PengajuanCuti'
import RencanaCuti from './src/pages/cuti/RencanaCuti'
import TrackingCuti from './src/pages/cuti/TrackingCuti'

import LemburHome from './src/pages/lembur/LemburHome'
import ApprovalLembur from './src/pages/lembur/ApprovalLembur'
import PengajuanLembur from './src/pages/lembur/PengajuanLembur'
import ReportingLembur from './src/pages/lembur/ReportingLembur'
import TrackingLembur from './src/pages/lembur/TrackingLembur'

import TrainingHome from './src/pages/trainingOnline/TrainingHome'
import AAJITraining from './src/pages/trainingOnline/AAJITraining'
import AdminMenuTraining from './src/pages/trainingOnline/AdminMenuTraining'
import ApprovalTraining from './src/pages/trainingOnline/ApprovalTraining'
import EksternalTraining from './src/pages/trainingOnline/EksternalTraining'
import PengajuanTraining from './src/pages/trainingOnline/PengajuanTraining'
import SertifikasiTraining from './src/pages/trainingOnline/SertifikasiTraining'
import SMRTraining from './src/pages/trainingOnline/SMRTraining'
import TrackingTraining from './src/pages/trainingOnline/TrackingTraining'
import TrainingCatalogTree from './src/pages/trainingOnline/TrainingCatalogTree'
import TrainingHistory from './src/pages/trainingOnline/TrainingHistory'
import ValidasiPeserta from './src/pages/trainingOnline/ValidasiPeserta'
import WAPERDTraining from './src/pages/trainingOnline/WAPERDTraining'

import ESPTHome from './src/pages/eSPT/ESPTHome'

import P2KOnlineHome from './src/pages/P2KOnline/P2KOnlineHome'
import PengajuanP2K from './src/pages/P2KOnline/PengajuanP2K'
import AdminP2K from './src/pages/P2KOnline/AdminP2K'
import ApprovalP2K from './src/pages/P2KOnline/ApprovalP2K'
import ArsipP2K from './src/pages/P2KOnline/ArsipP2K'
import ExternalScoreP2K from './src/pages/P2KOnline/ExternalScoreP2K'
import HistoriP2K from './src/pages/P2KOnline/HistoriP2K'
import TrackingP2K from './src/pages/P2KOnline/TrackingP2K'

import PinjamanOnlineHome from './src/pages/pinjamanOnline/PinjamanOnlineHome'
import SlipGajiOnlineHome from './src/pages/slipGajiOnline/SlipGajiOnlineHome'
import PerjalananDinasHome from './src/pages/perjalananDinasOnline/PerjalananDinasHome'
import ETravelHome from './src/pages/eTravel/ETravelHome'
import Form from './src/pages/Form'

import {
  StackNavigator,
} from 'react-navigation';


const RootStack = StackNavigator(
  {
    Login: {
      screen: Login,
    },
    Main: {
      screen: Main,
    },
    PersonalInfo: {
      screen: PersonalInfo,
    },
    EmployeeBenefit: {
      screen: EmployeeBenefit,
    },
    PerformanNReward: {
      screen: PerformanNReward,
    },
    Others: {
      screen: Others,
    },
    Admin: {
      screen: Admin,
    },
    PAdminPayroll: {
      screen: PAdminPayroll,
    },
    MngAndLearning: {
      screen: MngAndLearning,
    },
    Resourcing: {
      screen: Resourcing,
    },
    Outsourcing: {
      screen: Outsourcing,
    },
    CutiHome: {
      screen: CutiHome,
    },
    ApprovalCuti: {
      screen: ApprovalCuti,
    },
    BlockLeaveCuti: {
      screen: BlockLeaveCuti,
    },
    HistoriAbsensiCuti: {
      screen: HistoriAbsensiCuti,
    },
    MonitorAbsensiCuti: {
      screen: MonitorAbsensiCuti,
    },
    PengajuanCuti: {
      screen: PengajuanCuti,
    },
    RencanaCuti: {
      screen: RencanaCuti,
    },
    TrackingCuti: {
      screen: TrackingCuti,
    },

    LemburHome: {
      screen: LemburHome,
    },
    ApprovalLembur: {
      screen: ApprovalLembur,
    },
    PengajuanLembur: {
      screen: PengajuanLembur,
    },
    ReportingLembur: {
      screen: ReportingLembur,
    },
    TrackingLembur: {
      screen: TrackingLembur,
    },

    TrainingHome: {
      screen: TrainingHome,
    },

    ESPTHome: {
      screen: ESPTHome,
    },

    P2KOnlineHome: {
      screen: P2KOnlineHome,
    },
    AdminP2K:{
      screen: AdminP2K,
    },
    ApprovalP2K:{
      screen: ApprovalP2K,
    },
    ArsipP2K:{
      screen: ArsipP2K,
    },
    ExternalScoreP2K:{
      screen: ExternalScoreP2K,
    },
    HistoriP2K:{
      screen: HistoriP2K,
    },
    PengajuanP2K:{
      screen: PengajuanP2K,
    },
    TrackingP2K:{
      screen: TrackingP2K,
    },


    PinjamanOnlineHome: {
      screen: PinjamanOnlineHome,
    },

    SlipGajiOnlineHome: {
      screen: SlipGajiOnlineHome,
    },

    PerjalananDinasHome: {
      screen: PerjalananDinasHome,
    },

    ETravelHome: {
      screen: ETravelHome,
    },
    Form: {
      screen: Form,
    },

    Main2:{
      screen: Main2,
    },
    
  },

  { headerMode: 'none' },

  {
    initialRouteName: 'Login',
  }
);

export default class App extends React.Component {
  render() {
    return <RootStack />;
    //return <PengajuanP2K/>;
  }
}
