<script>
    import Filetable from "./filetable.svelte";
    import UploadRow from "./uploadRow.svelte";
    import { getStorage, ref, getMetadata, listAll } from "firebase/storage";
    import { onMount } from "svelte";
  
    const storage = getStorage();
    const refs = ["work", "clients", "pictures", "misc","ciclo5","ciclo6","ciclo7","ciclo8","ciclo9","ciclo10"];
    $: files = {
      work: [],
      clients: [],
      pictures: [],
      misc: [],
      ciclo5:[],
      ciclo6:[],
      ciclo7:[],
      ciclo8:[],
      ciclo9:[],
      ciclo10:[],
    };
  
    function getFileData() {
      files = {
        work: [],
        clients: [],
        pictures: [],
        misc: [],
        ciclo5:[],
        ciclo6:[],  
        ciclo7:[],  
        ciclo8:[],   
        ciclo9:[],
        ciclo10:[],
      };
      const user = localStorage.getItem("uid");
      refs.forEach((folder) => {
        let reference = ref(storage, `${user}/${folder}`);
        listAll(reference)
          .then((res) => {
            res.items.forEach((itemRef) => {
              getMetadata(itemRef).then((metaData) => {
                files[folder] = [...files[folder], metaData];
              });
            });
          })
          .catch((error) => {});
      });
    }
  
    onMount(() => {
      let user = "";
      getFileData();
    });
  </script>
  
  <div class="accordion accordion-flush" id="fileAccordion">
    <div class="accordion-item">
      <h5 class="accordion-header" id="flush-headingOne">
        <button
          class="accordion-button collapsed fw-bold"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#flush-collapseOne"
          aria-expanded="false"
          aria-controls="flush-collapseOne"
        >
          Ciclo 1 Files
        </button>
      </h5>
      <div
        id="flush-collapseOne"
        class="accordion-collapse collapse"
        aria-labelledby="flush-headingOne"
        data-bs-parent="#fileAccordion"
      >
        <div class="accordion-body">
          <UploadRow folder="work" functionProp={() => getFileData()} />
          {#if files.work.length > 0}
            <Filetable
              data={files.work}
              folder="work"
              functionProp={() => getFileData()}
            />
          {/if}
        </div>
      </div>
    </div>
    <div class="accordion-item">
      <h5 class="accordion-header" id="flush-headingTwo">
        <button
          class="accordion-button collapsed fw-bold"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#flush-collapseTwo"
          aria-expanded="false"
          aria-controls="flush-collapseTwo"
        >
          Ciclo 2 Files
        </button>
      </h5>
      <div
        id="flush-collapseTwo"
        class="accordion-collapse collapse"
        aria-labelledby="flush-headingTwo"
        data-bs-parent="#fileAccordion"
      >
        <div class="accordion-body">
          <UploadRow folder="clients" functionProp={() => getFileData()} />
          {#if files.clients.length > 0}
            <Filetable
              data={files.clients}
              folder="clients"
              functionProp={() => getFileData()}
            />
          {/if}
        </div>
      </div>
    </div>
    <div class="accordion-item">
      <h5 class="accordion-header" id="flush-headingOne">
        <button
          class="accordion-button collapsed fw-bold"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#flush-collapseThree"
          aria-expanded="false"
          aria-controls="flush-collapseThree"
        >
          Ciclo 3 Files
        </button>
      </h5>
      <div
        id="flush-collapseThree"
        class="accordion-collapse collapse"
        aria-labelledby="flush-headingOne"
        data-bs-parent="#fileAccordion"
      >
        <div class="accordion-body">
          <UploadRow folder="pictures" functionProp={() => getFileData()} />
          {#if files.pictures.length > 0}
            <Filetable
              data={files.pictures}
              folder="pictures"
              functionProp={() => getFileData()}
            />
          {/if}
        </div>
      </div>
    </div>
    <div class="accordion-item">
      <h5 class="accordion-header" id="flush-headingThree">
        <button
          class="accordion-button collapsed fw-bold"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#flush-collapseFour"
          aria-expanded="false"
          aria-controls="flush-collapseFour"
        >
          Ciclo 4 Files
        </button>
      </h5>
      <div
        id="flush-collapseFour"
        class="accordion-collapse collapse"
        aria-labelledby="flush-headingThree"
        data-bs-parent="#fileAccordion"
      >
        <div class="accordion-body">
          <UploadRow folder="misc" functionProp={() => getFileData()} />
          {#if files.misc.length > 0}
            <Filetable
              data={files.misc}
              folder="misc"
              functionProp={() => getFileData()}
            />
          {/if}
        </div>
      </div>
    </div>
    <div class="accordion-item">
      <h5 class="accordion-header" id="flush-headingFour">
        <button
          class="accordion-button collapsed fw-bold"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#flush-collapseFive"
          aria-expanded="false"
          aria-controls="flush-collapseFive"
        >
          Ciclo 5 Files
        </button>
      </h5>
      <div
        id="flush-collapseFive"
        class="accordion-collapse collapse"
        aria-labelledby="flush-headingFive"
        data-bs-parent="#fileAccordion"
      >
        <div class="accordion-body">
          <UploadRow folder="ciclo5" functionProp={() => getFileData()} />
          {#if files.ciclo5.length > 0}
            <Filetable
              data={files.ciclo5}
              folder="ciclo"
              functionProp={() => getFileData()}
            />
          {/if}
        </div>
      </div>
    </div>
    <div class="accordion-item">
      <h5 class="accordion-header" id="flush-headingFive">
        <button
          class="accordion-button collapsed fw-bold"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#flush-collapseSix"
          aria-expanded="false"
          aria-controls="flush-collapseSix"
        >
          Ciclo 6 Files
        </button>
      </h5>
      <div
        id="flush-collapseSix"
        class="accordion-collapse collapse"
        aria-labelledby="flush-headingSix"
        data-bs-parent="#fileAccordion"
      >
        <div class="accordion-body">
          <UploadRow folder="ciclo6" functionProp={() => getFileData()} />
          {#if files.ciclo6.length > 0}
            <Filetable
              data={files.ciclo6}
              folder="ciclo6"
              functionProp={() => getFileData()}
            />
          {/if}
        </div>
      </div>
    </div>
    <div class="accordion-item">
      <h5 class="accordion-header" id="flush-headingSix">
        <button
          class="accordion-button collapsed fw-bold"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#flush-collapseSeven"
          aria-expanded="false"
          aria-controls="flush-collapseSeven"
        >
          Ciclo 7 Files
        </button>
      </h5>
      <div
        id="flush-collapseSeven"
        class="accordion-collapse collapse"
        aria-labelledby="flush-headingSeven"
        data-bs-parent="#fileAccordion"
      >
        <div class="accordion-body">
          <UploadRow folder="ciclo7" functionProp={() => getFileData()} />
          {#if files.ciclo7.length > 0}
            <Filetable
              data={files.ciclo7}
              folder="ciclo7"
              functionProp={() => getFileData()}
            />
          {/if}
        </div>
      </div>
    </div>
    <div class="accordion-item">
      <h5 class="accordion-header" id="flush-headingSeven">
        <button
          class="accordion-button collapsed fw-bold"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#flush-collapseEight"
          aria-expanded="false"
          aria-controls="flush-collapseEight"
        >
          Ciclo 8 Files
        </button>
      </h5>
      <div
        id="flush-collapseEight"
        class="accordion-collapse collapse"
        aria-labelledby="flush-headingEight"
        data-bs-parent="#fileAccordion"
      >
        <div class="accordion-body">
          <UploadRow folder="ciclo8" functionProp={() => getFileData()} />
          {#if files.ciclo8.length > 0}
            <Filetable
              data={files.ciclo8}
              folder="ciclo8"
              functionProp={() => getFileData()}
            />
          {/if}
        </div>
      </div>
    </div>
    <div class="accordion-item">
      <h5 class="accordion-header" id="flush-headingEight">
        <button
          class="accordion-button collapsed fw-bold"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#flush-collapseNine"
          aria-expanded="false"
          aria-controls="flush-collapseNine"
        >
          Ciclo 9 Files
        </button>
      </h5>
      <div
        id="flush-collapseNine"
        class="accordion-collapse collapse"
        aria-labelledby="flush-headingNine"
        data-bs-parent="#fileAccordion"
      >
        <div class="accordion-body">
          <UploadRow folder="ciclo9" functionProp={() => getFileData()} />
          {#if files.ciclo9.length > 0}
            <Filetable
              data={files.ciclo9}
              folder="ciclo9"
              functionProp={() => getFileData()}
            />
          {/if}
        </div>
      </div>
    </div>
  </div>
  
  <style>
    .accordion-button:focus {
      box-shadow: none;
      border-color: rgba(0, 0, 0, 0.125);
    }
  </style>