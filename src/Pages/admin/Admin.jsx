import React from 'react'
import Layout from '../../Componants/admin/Layout'

import { Route, Routes } from 'react-router-dom'

const Admin = () => {
  return (
//     <div>
//       hello worlds
//        <Layout>
// <Table/>  
//     </Layout>
//     </div>
<Routes>
{/* <Route path="table" element={<Layout><Table /></Layout>} /> */}
 <Route path="layout" element={<Layout></Layout>} />

</Routes>
  )
}

export default Admin
