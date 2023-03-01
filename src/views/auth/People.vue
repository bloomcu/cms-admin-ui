<template>
  <AuthLayout>
    <div class="flex flex-wrap items-center justify-between margin-bottom-md">
        <h1 class="text-lg">People</h1>
    </div>
      
    <div class="app-dashboard">
        <div class="app-dashboard-column--right">
          <form class="margin-bottom-lg">
            <p class="text-sm text-bold margin-bottom-xs">Invite User</p>
            
            <div class="grid gap-xs">
              <div class="col-10@md">
                <input class="form-control width-100%" type="text" name="invite-email" placeholder="Email address">
              </div>

              <div class="col-2@md">
                <button class="btn btn--primary height-100% width-100%">Invite</button>
              </div>
            </div>
          </form>
          
          <p class="text-sm text-bold margin-bottom-xs">Pending Invites</p>
          <ul class="item margin-bottom-lg">
              <li v-for="(invite, index) in invitations" :key="index" class="item__wrapper flex padding-sm">
                  <!-- Left -->
                  <div class="padding-y-xxxs">
                      <p class="text-base">{{ invite.email }}</p>
                      <span class="text-xs">Invited {{ invite.created_at }}</span>
                  </div>

                  <!-- Right -->
                  <div class="flex items-center margin-left-auto">
                    <button class="app-action-icon reset margin-right-sm" type="button" name="button">
                        <svg class="icon" viewBox="0 0 24 24">
                            <g stroke-linecap="square" stroke-miterlimit="10" fill="none" stroke="currentColor" stroke-linejoin="miter"><path d="M20,9l-.867,12.142A2,2,0,0,1,17.138,23H6.862a2,2,0,0,1-1.995-1.858L4,9"></path><line x1="1" y1="5" x2="23" y2="5"></line><path data-cap="butt" d="M8,5V1h8V5" stroke-linecap="butt"></path></g>
                        </svg>
                    </button>
                    
                    <div class="status-dot status-dot--orange margin-left-sm" aria-hidden="true"></div>
                  </div>
              </li>
          </ul>
          
          <p class="text-sm text-bold margin-bottom-xs">Users</p>
          <ul class="item">
              <li v-for="(user, index) in users" :key="index" class="item__wrapper flex padding-sm">
                  <!-- Left -->
                  <div class="padding-y-xxxs">
                      <p class="text-base margin-bottom-xxs">{{ user.name }}</p>
                      <p class="text-sm margin-bottom-xxs">{{ user.email }}</p>
                      <p class="text-xs">Joined {{ user.created_at }}</p>
                  </div>

                  <!-- Right -->
                  <div class="flex items-center margin-left-auto">
                    <button class="app-action-icon reset margin-right-sm" type="button" name="button">
                        <svg class="icon" viewBox="0 0 24 24">
                            <g stroke-linecap="square" stroke-miterlimit="10" fill="none" stroke="currentColor" stroke-linejoin="miter"><path d="M20,9l-.867,12.142A2,2,0,0,1,17.138,23H6.862a2,2,0,0,1-1.995-1.858L4,9"></path><line x1="1" y1="5" x2="23" y2="5"></line><path data-cap="butt" d="M8,5V1h8V5" stroke-linecap="butt"></path></g>
                        </svg>
                    </button>
                    
                    <div class="status-dot status-dot--success margin-left-sm" aria-hidden="true"></div>
                  </div>
              </li>
          </ul>
        </div>
    </div>
  </AuthLayout>
</template>

<script setup>
const invitations = [
  { email: 'pumpkin@journeyframe.com', created_at: '2 hours ago' },
]

const users = [
  { name: 'Caity Krauss', email: 'caity@bloomcu.com', created_at: 'just now' },
  { name: 'Sarah Harmon', email: 'sarah@bloomcu.com', created_at: '1 hour ago' },
  { name: 'Derik Krauss', email: 'derik@bloomcu.com', created_at: '2 days ago' },
  { name: 'Ryan Harmon', email: 'ryan@bloomcu.com', created_at: 'last month' },
]
</script>
