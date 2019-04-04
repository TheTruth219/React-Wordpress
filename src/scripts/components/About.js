import DataStore from 'flux/stores/DataStore.js';
import helpers from 'helpers.js';




class About extends React.Component {

    componentDidMount(){
      let allData = DataStore.getAll();
      let page = DataStore.getPageBySlug('about');
      let wpContent = helpers.createNode(page.content.rendered);
      let targetNode = document.querySelector('.content');
      targetNode.appendChild(wpContent);
    }

    render() {
        let allData = DataStore.getAll();
        let page = DataStore.getPageBySlug('about');

        console.log(allData);
        return (
            <div>
              <h1>{page.title.rendered}</h1>
              <br/>
              <br/>
              <div className ="content">

              </div>
            </div>
        );
    }
}


export default About;
