<?php

namespace App\Http\Resources;

use Illuminate\Http\Resources\Json\JsonResource;

class TodosCollection extends JsonResource
{
    /**
     * Transform the resource collection into an array.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return array|\Illuminate\Contracts\Support\Arrayable|\JsonSerializable
     */
    public function toArray($request)
    {
        return [
            'todos_id' => $this->todos_id,
            'todos_content' => $this->todos_content,
            'todos_checked' => $this->todos_checked,
            'todos_status' => $this->todos_status
        ];
    }
}
