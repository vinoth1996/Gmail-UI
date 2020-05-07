import React, { Component } from 'react';
import MailList from '../mailList';
import Expansion from './Expansion';

class ExpansionList extends Component {
  render(){

    const filteredMails = MailList.filter(mails =>{
      return mails.mailType.toLowerCase().includes((this.props.type).toLowerCase());
    })
    
    return(
      <div>
        {
          filteredMails.map((mail, i) => {
            return <Expansion key={filteredMails[i].id} from={filteredMails[i].from} to={filteredMails[i].to} subject={filteredMails[i].subject} message={filteredMails[i].message} status={filteredMails[i].status} date={filteredMails[i].date} />
          })          
        }
      </div>  
    )
  }
}

export default ExpansionList