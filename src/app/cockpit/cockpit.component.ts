import { Component, OnInit, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-cockpit',
  templateUrl: './cockpit.component.html',
  styleUrls: ['./cockpit.component.css']
})
export class CockpitComponent implements OnInit {
  @Output('srvCreated') serverCreated = new EventEmitter<{name: string, content: string }>();
  @Output('bpCreated') bluesprintAdded = new EventEmitter<{name: string, content: string }>();
  newServerName = '';
  newServerContent = '';
  constructor() { }

  ngOnInit(): void {
  }
  onAddServer() {
    this.serverCreated.emit({name: this.newServerName, content: this.newServerContent});
  }
  onAddBlueprint() {
    this.bluesprintAdded.emit({name: this.newServerName, content: this.newServerContent});

  }

}
