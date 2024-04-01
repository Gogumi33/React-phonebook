import React from 'react'
import SearchBox from './SearchBox'
import ContactItem from './ContactItem'
import { UseSelector, useSelector } from 'react-redux'
import { useEffect, useState } from 'react'

const ContackList = () => {
  const { contactList, keyword } = useSelector((state)=>state);
  let [filteredList, setFilteredList] = useState([]);
  useEffect(() => {
    if (keyword !== "") {
      let list = contactList.filter((item) => item.name.includes(keyword));

      setFilteredList(list);
    } else {
      setFilteredList(contactList);
    }
  }, [keyword, contactList]);
  
  return (
    <div>
      <SearchBox />
      <div className="contact-list">
        num:{filteredList.length}
        {filteredList.map((item, index) => (
          <ContactItem item={item} key={index} />
        ))}
      </div>
    </div>
  )
}

export default ContackList