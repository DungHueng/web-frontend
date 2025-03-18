let jobs = [];
let choice;

do {
  choice = +prompt(`
      1.Thêm công việc mới.
      2.Hiển thị tất cả các công việc.
      3.Cập nhật trạng thái công việc theo id.
      4.Lọc các công việc theo trạng thái hoàn thành, chưa hoàn thành.
      5.Sắp xếp các công việc theo trạng thái công việc.
      6.Thoát.
     
 ` );

  switch (choice) {
      case 1:
        addJob();
          break;

      case 2:
          displayJobs();
          break;

      case 3:
          UpdateJobs();
          break;
      case 4 :
        SearchJob();
        break;

      case 5 :
        SortJob();
        break;

      case 6:
          alert("kết thúc chương trình!");
          break;

      default:
          alert("Vui lòng nhập số từ 1 đến 6.");
  }
} while (choice !== 6);

function addJob(){
        
        let id = 0;
        if (jobs.length == 0) {
            id = 1;
        } else {
            id = jobs[jobs.length - 1].id + 1;
        }
        let title = prompt("Nhập tên công việc: ");
        let discribe = prompt("Nhập mô tả: ");
        let year = parseInt(prompt("Nhập Thời gian bắt đầu: "));
        let isAvailable = confirm("trạng thái công việc công việc không? (OK: Hoàn thành, Cancel: Chưa hoàn thành)");
     let job={
        id :id,
         title:title, 
         discribe:discribe,
          year:year, 
          isAvailable: isAvailable};
       jobs.push(job);
}

function displayJobs() {
    if(jobs.length==0){
        console.log("Mảng không có dữ liệu");
    }else{
       console.log(jobs);
       
    }
}

function UpdateJobs() {
  let id = +prompt("Nhập ID công việc cần cập nhật: ");
 let check=0;
 let index=0;
 for (let i = 0; i < jobs.length; i++) {
   if(id==jobs[i].id){
    index=i;
    check++;
    break;
}
 }
  if (check>0) {
    jobs[index].isAvailable = confirm(
      "Cập nhật trạng thái công việc? (OK: Hoàn thành, Cancel: Chưa hoàn thành)"
    );
    console.log("Cập nhật thành công!");
  } else {
    console.log("Không tìm thấy công việc với ID đã nhập.");
  }
}

function SearchJob() {
    let completed = confirm("Bạn muốn xem công việc nào? (OK: Hoàn thành, Cancel: Chưa hoàn thành)");
    let filteredJobs = jobs.filter((job) => job.isAvailable === completed);
  
    if (filteredJobs.length === 0) {
      completed.log("Không có công việc nào phù hợp.");
      return;
    }
  
    alert("Danh sách công việc:");
    filteredJobs.forEach((job) => {
      console.log(
        `${job.id} - ${job.title} - ${job.discribe} - ${job.year} - ${job.isAvailable ? "Hoàn thành" : "Chưa hoàn thành"}`
      );
    });
  }
  
  function SortJob() {
    jobs.sort((a, b) => a.isAvailable - b.isAvailable);
    alert("Đã sắp xếp công việc!");
    displayJobs();
  }