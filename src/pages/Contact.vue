<template>
  <Layout>
    <!-- Page Header -->
    <header
      class="masthead"
      style="background-image: url('img/contact-bg.jpg')"
    >
      <div class="overlay"></div>
      <div class="container">
        <div class="row">
          <div class="col-lg-8 col-md-10 mx-auto">
            <div class="page-heading">
              <h1>联系我</h1>
              <span class="subheading">有什么问题么？快来撩我吧~</span>
            </div>
          </div>
        </div>
      </div>
    </header>

    <!-- Main Content -->
    <div class="container">
      <div class="row">
        <div class="col-lg-8 col-md-10 mx-auto">
          <p>填写你想跟我说的话，然后提交给我</p>
          <!-- Contact Form - Enter your email address on line 19 of the mail/contact_me.php file to make this form work. -->
          <!-- WARNING: Some web hosts do not allow emails to be sent through forms to common mail hosts like Gmail or Yahoo. It's recommended that you use a private domain email address! -->
          <!-- To use the contact form, your site must be on a live web host with PHP! The form will not work locally! -->
          <form name="sentMessage" id="contactForm" @submit.prevent="onSubmit">
            <div class="control-group">
              <div class="form-group floating-label-form-group controls">
                <label>姓名</label>
                <input
                  type="text"
                  class="form-control"
                  placeholder="请输入姓名"
                  v-model="form.name"
                  id="name"
                  required
                  data-validation-required-message="请输入姓名"
                />
                <p class="help-block text-danger"></p>
              </div>
            </div>
            <div class="control-group">
              <div class="form-group floating-label-form-group controls">
                <label>电子邮件</label>
                <input
                  type="email"
                  class="form-control"
                  placeholder="请输入电子邮件"
                  id="email"
                  v-model="form.email"
                  required
                  data-validation-required-message="请输入电子邮件"
                />
                <p class="help-block text-danger"></p>
              </div>
            </div>
            <div class="control-group">
              <div
                class="form-group col-xs-12 floating-label-form-group controls"
              >
                <label>电话号码</label>
                <input
                  type="tel"
                  class="form-control"
                  placeholder="请输入电话号码"
                  id="phone"
                  v-model="form.phone"
                  required
                  data-validation-required-message="请输入电话号码"
                />
                <p class="help-block text-danger"></p>
              </div>
            </div>
            <div class="control-group">
              <div class="form-group floating-label-form-group controls">
                <label>留言</label>
                <textarea
                  rows="5"
                  class="form-control"
                  placeholder="请输入您的留言"
                  id="message"
                  v-model="form.message"
                  required
                  data-validation-required-message="请输入您的留言"
                ></textarea>
                <p class="help-block text-danger"></p>
              </div>
            </div>
            <br />
            <div id="success"></div>
            <button class="btn btn-primary">提交</button>
          </form>
        </div>
      </div>
    </div>
  </Layout>
</template>

<script>
import Axios from "axios";
export default {
  data() {
    return {
      form: {
        name: "",
        email: "",
        phone: "",
        message: "",
      },
    };
  },
  methods: {
    async onSubmit() {
      const { form } = this;
      try {
        const { data } = await Axios.post(
          process.env.GRIDSOME_API_URL + "/contacts",
          form
        );
        alert("提交成功");
        this.form = {}
      } catch (e) {
        alert("提交失败");
      }
    },
  },
};
</script>

<style>
</style>