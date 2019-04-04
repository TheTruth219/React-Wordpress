class Media extends React.Component {


    render() {
        let allData = DataStore.getAll();
        let page = DataStore.getPageBySlug('about');
        let acf = page.acf; // Advanced Custom Fields data

        console.log(allData);
        return (
            <div>
              <h1>{page.title.rendered}</h1>
              <br/>
              <br/>
              <div className ="content">
                {/* <p>{acf.yourCustomFieldName}</p> */}
              </div>
            </div>

        );

    }

}


export default Media;
