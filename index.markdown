---
layout: default
title: Gatikotto | High-Performance Suspension Systems for Ultimate Control
permalink: /
description: "Discover Gatikotto – the leader in high-performance suspension systems designed for unmatched control, precision handling, and next-level driving performance"
image: "/assets/images/e.png"
---

<!-- banner part  -->
 <style>
    .carousel-item img {      height: 400px;      object-fit: cover;    }
    .click-point {
      position: absolute;
      width: 20px;
      height: 20px;
      background: white;
      border-radius: 50%;
      cursor: pointer;
      opacity: 1.5;
    }
    .point1 { top: 46%; left: 14.5%; }
    .point2 { top: 44%; left: 36%; }
  
    .click-point:hover .popup-image {      display: block;    }
  .popup-image {
  display: none;
  position: absolute;
  top: 20px;
  left: 30px;
  width: 250px;       
  border: 2px solid #ccc;
  border-radius: 10px;
  background-color: rgba(255, 255, 255, 0.95); 
  box-shadow: 0 0 10px rgba(0,0,0,0.2);
}


  </style>



 <div id="bannerCarousel" class="carousel slide" data-bs-ride="carousel" data-bs-interval="3000">
  <div class="carousel-inner">
    <div class="carousel-item active">
        <!-- <img src="/assets/images/banner1.jpg" > -->
     <div class="image-container">
    <img src="/assets/images/banner1.jpg" class="d-block w-100 h-50" alt="Banner 1">
    <div class="click-point point1"><div class="popup-image"><img src="/assets/images/pop-up1.png" alt="Hover Image 1" style="width: 100%; height: auto;"> </div></div>
    <div class="click-point point2"><div class="popup-image"> <img src="/assets/images/pop-up2.png" alt="Hover Image 2" style="width: 100%; height: auto;"></div> </div>
  </div>
      </div>
      <div class="carousel-item">
        <img src="/assets/images/banner2.jpg" class="d-block w-100 h-50" alt="Banner 2">
      </div>
      <div class="carousel-item">
        <img src="/assets/images/banner3.jpg" class="d-block w-100 h-50" alt="Banner 3">
      </div>
    </div>
    <!-- Optional controls -->
    <button class="carousel-control-prev" type="button" data-bs-target="#bannerCarousel" data-bs-slide="prev">
      <span class="carousel-control-prev-icon"></span>
    </button>
    <button class="carousel-control-next" type="button" data-bs-target="#bannerCarousel" data-bs-slide="next">
      <span class="carousel-control-next-icon"></span>
    </button>
  </div>

<!-- banner part close -->
<!-- About Section -->
<section class="py-5">
        <div class="container py-5">
            <div class="row align-items-center">
                <div class="col-lg-5 mb-4 mb-lg-0">
                    <img src="/assets/images/gatik1.jpg" 
                         alt="Precision Engineering" class="img-fluid rounded shadow">
                </div>
                <div class="col-lg-7">
                    <h2 class="fw-bold mb-4">Engineering Excellence Since 2023</h2>
                    <p class="lead">At Gatikotto, we are driven by determination, deep technical expertise, and a relentless passion for excellence.</p>
                    <p>With over a century of combined experience in mechanical component manufacturing, we deliver reliable, high-performance solutions tailored to a wide range of industrial and automotive applications.</p>
                    <div class="d-flex align-items-center mt-4">
                        <div class="bg-primary bg-opacity-10 p-3 rounded me-3"><i class="bi bi-award-fill text-primary fs-2"></i></div>
                        <div>
                            <h5 class="mb-0">ISO 9001:2015 Certified</h5>
                            <p class="text-muted mb-0">Quality Management System</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
<!-- Manufacturing Process -->
<section class="py-5 bg-light">
        <div class="container py-5">
            <div class="text-center mb-5">
                <h2 class="fw-bold">End-to-End Manufacturing Excellence</h2>
                <p class="lead">We offer comprehensive mechanical engineering services—from design to delivery</p>
            </div>
            <div class="row">
                <div class="col-lg-6 ">
                    <div class="process-step ">
                        <h4>Material Expertise</h4>
                        <p>Aluminum, steel, brass, sintered materials, forged and cast components.</p>
                    </div>
                    <div class="process-step">
                        <h4>Precision Engineering</h4>
                        <p>CNC machining, ultrasonic welding, and advanced surface treatments.</p>
                    </div>
                    <div class="process-step">
                        <h4>Surface Finishing</h4>
                        <p>Chrome and zinc plating, anodizing, and industrial-grade painting.</p>
                    </div>
                    <div class="process-step">
                        <h4>Final Assembly & Testing</h4>
                        <p>Fully integrated assembly lines with rigorous quality checks to ensure product reliability and durability.</p>
                    </div>
                </div>
                <div class="col-lg-6">
                    <div class="card border-0 shadow-lg h-100">
                        <div class="card-body p-4">
                            <h3 class="card-title text-center mb-4">Our Manufacturing Philosophy</h3>
                            <div class="text-center mb-4">
                                <i class="bi bi-gear-fill text-primary fs-1"></i>
                            </div>
                            <p class="card-text">At Gatikotto, we don't just manufacture parts—we engineer performance, reliability, and innovation into every component. Our vertically integrated manufacturing process ensures complete quality control at every stage.</p>
                            <ul class="list-group list-group-flush">
                                <li class="list-group-item bg-transparent"><i class="bi bi-check-circle-fill text-success me-2"></i> 100% Quality Inspection</li>
                                <li class="list-group-item bg-transparent"><i class="bi bi-check-circle-fill text-success me-2"></i> Advanced Testing Facilities</li>
                                <li class="list-group-item bg-transparent"><i class="bi bi-check-circle-fill text-success me-2"></i> Continuous Process Improvement</li>
                                <li class="list-group-item bg-transparent"><i class="bi bi-check-circle-fill text-success me-2"></i> Sustainable Manufacturing</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>


<!-- product  -->
{% include product.html %}
<!-- our team -->
<!-- Team 1 - Bootstrap Brain Component -->
<section class="bg-light py-3 py-md-5 py-xl-8">
  <div class="container">
    <div class="row justify-content-md-center">
      <div class="col-12 col-md-10 col-lg-8 col-xl-7 col-xxl-6">
        <h2 class="mb-4 display-5 text-center">Our Team</h2>
        <p class="text-secondary mb-5 text-center lead fs-4">We are a group of innovative, experienced, and proficient teams. You will love to collaborate with us.</p>
        <hr class="w-50 mx-auto mb-5 mb-xl-9 border-dark-subtle">
      </div>
    </div>
  </div>

  <div class="container overflow-hidden">
    <div class="row gy-4 gy-lg-0 gx-xxl-5">
      <div class="col-12 col-md-6 col-lg-4 p-4">
        <div class="card border-0 border-bottom border-primary shadow-sm overflow-hidden">
          <div class="card-body p-0">
            <figure class="m-0 p-0">
              <!-- <img class="img-fluid" loading="lazy" src="/assets/images/team-img-5.webp" alt="Flora Nyra"> -->
              <figcaption class="m-0 p-4"> <h4 class="mb-1">Vipin Kumar</h4> <p class="text-secondary mb-0">CEO</p></figcaption>
            </figure>
          </div>
        </div>
      </div>
      <div class="col-12 col-md-6 col-lg-4 p-4">
        <div class="card border-0 border-bottom border-primary shadow-sm overflow-hidden">
          <div class="card-body p-0">
            <figure class="m-0 p-0">
              <!-- <img class="img-fluid" loading="lazy" src="/assets/images/team-img-5.webp" alt="Evander Mac"> -->
              <figcaption class="m-0 p-4"><h4 class="mb-1">Amit Sharma </h4> <p class="text-secondary mb-0">Head – O&E</p></figcaption>
            </figure>
          </div>
        </div>
      </div>
      <div class="col-12 col-md-6 col-lg-4 p-4">
        <div class="card border-0 border-bottom border-primary shadow-sm overflow-hidden">
          <div class="card-body p-0">
            <figure class="m-0 p-0">
              <!-- <img class="img-fluid" loading="lazy" src="/assets/images/team-img-5.webp" alt="Taytum Elia"> -->
              <figcaption class="m-0 p-4"> <h4 class="mb-1">Vineet Kumar</h4> <p class="text-secondary mb-0">Head OEM Marketing</p> </figcaption>
            </figure>
          </div>
        </div>
      </div>
      <div class="col-12 col-md-6 col-lg-4 p-4">
        <div class="card border-0 border-bottom border-primary shadow-sm overflow-hidden">
          <div class="card-body p-0">
            <figure class="m-0 p-0">
              <!-- <img class="img-fluid" loading="lazy" src="/assets/images/team-img-5.webp" alt="Wylder Elio"> -->
              <figcaption class="m-0 p-4"><h4 class="mb-1">Kamal Singh</h4><p class="text-secondary mb-0">Head – Commercial</p> </figcaption>
            </figure>
          </div>
        </div>
      </div>
      <div class="col-12 col-md-6 col-lg-4 p-4">
        <div class="card border-0 border-bottom border-primary shadow-sm overflow-hidden">
          <div class="card-body p-0">
            <figure class="m-0 p-0">
              <!-- <img class="img-fluid" loading="lazy" src="/assets/images/team-img-5.webp" alt="Wylder Elio"> -->
              <figcaption class="m-0 p-4">
                <h4 class="mb-1">Satish Kumar</h4>
                <p class="text-secondary mb-0">Head – Marketing (Aftermarket)</p>
              </figcaption>
            </figure>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>
<!-- 
<img src="/assets/images/team.jpg" alt="Gatikotto Products" class="img-fluid w-100 d-block" style="height: 600px; object-fit: cover;"> -->
















