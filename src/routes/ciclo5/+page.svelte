<script>
    import Filetable from "../../components/content/filetable.svelte";
    import UploadRow from "../../components/content/uploadRow.svelte";
    import { getStorage, ref, getMetadata, listAll } from "firebase/storage";
    import { onMount } from "svelte";
  
    const storage = getStorage();
    const refs = ["work"];
    $: files = {
      work: [],
    };
  
    function getFileData() {
      files = {
        work: [],
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

  <h1>Ciclo 1 All Files</h1>
  
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
          Ciclo 1 WorkFiles
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
  </div>
  
  <style>
    .accordion-button:focus {
      box-shadow: none;
      border-color: rgba(0, 0, 0, 0.125);
    }
  </style>