import React from 'react';

import logo from './logo.svg';
import './App.scss';
import Header from './components/Header';
import Headline from './components/Headline';
import ListItem from './components/ListItem';
import {connect}  from 'react-redux';
import {fetchWines} from './store/actions';
import Button from '@material-ui/core/Button';
import Card from './components/card';



const tempArr = [{
  name: 'Eben',
  age: 24,
  isTall: false
}]

class App extends React.Component {


    fetchWines = () => {
        this.props.dispatch(fetchWines()).then(res => {
        console.log(res.payload);
        console.log(this.props);
      })
    }
  
    render() {

      console.log(this.props);
        return (
          <div>
            <Header />
            <section className="main">
              <Headline header="Wines" tempArr={tempArr} desc="Click the button to render wines!"/>
              <Button variant="contained" color="primary" onClick={() => this.fetchWines()}>
                Load Wines
              </Button>

              <div style={{marginTop: '50px'}}>
                <Card  />
              </div>
             
            </section>
            
          </div>
        );
    }
}

const mapStateToProps = (state) => {
  return {
    wines: state.winesReducer.newWines
  }
}

export default connect(mapStateToProps)(App);
