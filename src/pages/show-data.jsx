import React from 'react';

// Styling
import './show-data.css';

const ShowData = (props) => {

    function tableData(thisData) {

        return (
            <tr key={thisData.id}>
                <td>{thisData.userFname + ' ' + thisData.userLname}</td>
                <td>{thisData.userEmail}</td>
                <td>{thisData.userPhone}</td>
                <td>{thisData.userMessage}</td>
            </tr>
        );
    };

    const formattedData = props.addedValues.map(tableData);

    return (
        <section>
            {
                props.addedValues && props.addedValues.length > 0 && (
                    <div>

                        <h1>Filled In Data</h1>
                        <div className="tbl-header">
                            <table cellPadding="0" cellSpacing="0" border="0">
                                <thead>
                                    <tr>
                                        <th>Name</th>
                                        <th>Email</th>
                                        <th>Phone</th>
                                        <th>Message</th>
                                    </tr>
                                </thead>
                            </table>
                        </div>
                        <div className="tbl-content">
                            <table cellPadding="0" cellSpacing="0" border="0">
                                <tbody>
                                    {formattedData}
                                </tbody>
                            </table>
                        </div>
                    </div>
                )
            }
            {
                (!props.addedValues || props.addedValues.length === 0) && (

                    <h1>No Data!</h1>
                )
            }
        </section>
    );
};

export default ShowData;
